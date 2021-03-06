const jwt_verify = require('../middleware').jwt_verify;
const utils = require('../authorization/utilities');
var CryptoJS = require("crypto-js");

module.exports = (app) => {

  //////////////////////////////////////////////////////////////////////////////
  // API Test Route
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to ACDS API'
  }));

  //////////////////////////////////////////////////////////////////////////////
  // Authentication Routes
  app.get('/api/login',
    (req, res) => {
      var jwt_token = utils.generateToken();
      var encrypted = CryptoJS.AES.encrypt(jwt_token, process.env.AES_SECRET).toString();
      console.log(encrypted);
      res.json({
        success: true,
        token: encrypted,
        timeout: new Date(process.env.JWT_TIMEOUT * 1000) // Date takes milliseconds
      });
    }
  );
  app.get('/api/verify', jwt_verify, (req, res) => {
    res.json({
      success: true,
      message: "your token is valid"
    })
  });
  app.get(`/api/${process.env.FLAG_ENDPOINT}`, jwt_verify, (req, res) => {
    res.json({
      success: true,
      flag: process.env.FLAG
    })
  });
  //////////////////////////////////////////////////////////////////////////////
};
