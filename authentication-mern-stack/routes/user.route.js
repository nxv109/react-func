const express = require('express');
const router = express.Router();

const { addUser, login, getList, getToken } = require('../controllers/user.controller');
// router.use(require('../middleware/checkToken')); // mọi request đều chạy qua checkToken trước.
const checkToken = require('../middleware/checkToken');

router.post('/user/register', addUser);
router.post('/user/login', login);
router.post('/auth/refresh-token', getToken);
router.get('/user/get-list', checkToken, getList);

module.exports = router;