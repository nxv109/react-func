const jwt = require('jsonwebtoken')
const CONFIG = require('../config/')

module.exports = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['authorization'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, CONFIG.ACCESS_TOKEN, function(err, decoded) {
      if (err) {
        console.error(err.toString());
        //if (err) throw new Error(err)token
        return res.status(401).json({ "error": true, "message": 'Unauthorized access.', err });
      }
      req.decoded = decoded;
      
      next();
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).json({
      error: true,
      message: 'No token provided.'
    });
  }
}