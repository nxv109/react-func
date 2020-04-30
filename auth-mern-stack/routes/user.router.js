import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from '../models/User.model';
import config from '../config';
import auth from '../midleware/auth';

const router = express.Router();
const { SECRET } = config;

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({ msg: 'Please enter all fields' });
  }

  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.json({ message: 'User already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const user = new UserModel({
      username,
      email,
      password: passwordHash,
      role: 0,
    });
    const savedUser = await user.save();
    if (!savedUser) throw Error('Save user failed');
    const token = jwt.sign({ id: savedUser._id }, SECRET, { expiresIn: '1h' });
    if (!token) throw Error('Couldnt sign the token');
    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        username: savedUser.username,
        email: savedUser.email,
      },
      message: 'Sign up success',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ msg: 'Please enter all fields' });
  }

  try {
    const userExist = await UserModel.findOne({ email });
    if (!userExist) {
      return res.json({ message: 'User not exists' });
    }

    const match = await bcrypt.compare(password, userExist.password);
    if (!match) {
      return res.json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ id: userExist._id }, SECRET, { expiresIn: '1h' });
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/users', auth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select('-password');

    if (!user) throw Error('User Does not exist');

    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
