import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';

import UserModel from '../models/User.model';
import config from '../config';
import auth from '../midleware/auth';

const router = express.Router();
const { SECRET } = config;

router.post('/fb-login', async (req, res) => {
  const { accessToken, email, userID, name } = req.body;

  fetch(
    `https://graph.facebook.com/v2.3/me?access_token=${accessToken}&fields=name%2Cemail%2Cpicture&locale=en_US&method=get&pretty=0&sdk=joey&suppress_http_code=1`
  )
    .then((response) => response.json())
    .then(async (response) => {
      const { email, name } = response;
      const userExist = await UserModel.findOne({ email });

      if (userExist) {
        const token = jwt.sign({ id: userExist._id }, SECRET, {
          expiresIn: '1h',
        });
        if (!token) throw Error('Couldnt sign the token');

        res.status(200).json({
          token,
          user: {
            id: userExist.id,
            username: userExist.username,
            email: userExist.email,
            role: userExist.role,
          },
          message: 'Login success',
        });
      } else {
        const user = new UserModel({
          username: name,
          email,
          tokenFB: accessToken,
          role: 0,
        });

        const savedUser = await user.save();
        if (!savedUser) throw Error('Save user failed');

        const token = jwt.sign({ id: savedUser._id }, SECRET, {
          expiresIn: '1h',
        });
        if (!token) throw Error('Couldnt sign the token');

        res.status(200).json({
          token,
          user: {
            id: savedUser.id,
            username: savedUser.username,
            email: savedUser.email,
          },
          message: 'Registered and logged success',
        });
      }
    });
});

export default router;
