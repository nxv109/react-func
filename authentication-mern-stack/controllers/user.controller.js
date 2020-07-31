const i18n = require('i18n');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { validator } = require('../lang');
const CONFIG = require('../config');

const UserModel = require('../models/user.model');
let refreshTokens = {};

const addUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const userExist = await UserModel.findOne({ email });

  try {
    if (userExist) {
      return res.status(409).json({
        status: i18n.__(validator.existed, { name: 'User' }),
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const User = new UserModel();

      User.fullName = fullName;
      User.email = email;
      User.password = hashPassword;

      const saveUser = await User.save();
      const userObj = {
        _id: saveUser._id,
        email: saveUser.email,
        fullName: saveUser.fullName,
      }

      return res.status(200).json({
        status: i18n.__(validator.add_success, { name: 'User' }),
        data: userObj,
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: i18n.__(validator.common_error),
    })
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  try {
    if (!user) {
      return res.status(403).json({
        status: i18n.__(validator.existed, { name: 'Email or password' }),
      })
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (comparePassword) {
      const userData = {
        fullName: user.fullName,
        email: user.email,
      }
      const token = jwt.sign(userData, CONFIG.ACCESS_TOKEN, { expiresIn: '10s' });
      const refreshToken = jwt.sign(userData, CONFIG.REFRESH_TOKEN, { expiresIn: '20s' });

      const response = {
        "status": "Success",
        "token": token,
        "refreshToken": refreshToken,
        "data": userData,
      }

      refreshTokens[refreshToken] = response;
      return res.json(response);
    } else {
      return res.status(422).json({
        status: i18n.__(validator.incorrect, { name: 'password' }),
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: i18n.__(validator.common_error),
    })
  }
};

const getToken = (req, res) => {
  // refresh the damn token
  const refreshTokenClient = req.body.refreshToken || req.query.refreshToken || req.headers['authorization'];
  // if refresh token exists
  if (refreshTokenClient && (refreshTokenClient in refreshTokens)) {
    try {
      const decoded = jwt.verify(refreshTokenClient, CONFIG.REFRESH_TOKEN);

      if (decoded) {
        const token = jwt.sign(refreshTokens[refreshTokenClient].data, CONFIG.ACCESS_TOKEN, { expiresIn: '10s' });
        const refreshToken = jwt.sign(refreshTokens[refreshTokenClient].data, CONFIG.REFRESH_TOKEN, { expiresIn: '20s' });
        const response = {
          "status": "Success",
          "accessToken": token,
          "refreshToken": refreshToken,
          "data": refreshTokens[refreshTokenClient].data,
        }
        // update the token in the list
        refreshTokens[refreshToken] = response;

        return res.status(200).json(response);
      }
    } catch(err) {
      return res.status(401).json({ status: 'refreshToken expired' });
    }
  } else {
    return res.status(404).json({ status: 'Invalid request' })
  }
};

const getList = async (req, res) => {
  const users = [{
    username: 'Cr7',
    team: 'Juve',
  }, {
    username: 'Messi',
    team: 'Barca',
  }]
  res.json({ status: 'success', elements: users })
};

module.exports = {
  addUser,
  login,
  getList,
  getToken,
};