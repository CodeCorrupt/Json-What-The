const jwt = require('jsonwebtoken');

const generateToken = () => {
  var token = jwt.sign(
    {
      message: "almost there",
      url: `/api/${process.env.FLAG_ENDPOINT}`
    }
    , process.env.JWT_SECRET
    , { expiresIn: process.env.JWT_TIMEOUT }
  );

  return token;
}

const verify = (token, callback) => {
  jwt.verify(token, process.env.JWT_SECRET, callback)
}

module.exports = {
  generateToken,
  verify
};
