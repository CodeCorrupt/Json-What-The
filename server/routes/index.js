const jwt_verify = require('../middleware').jwt_verify;
const utils = require('../authorization/utilities');

module.exports = (app) => {

  //////////////////////////////////////////////////////////////////////////////
  // API Test Route
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to ACDS API'
  }));

  //////////////////////////////////////////////////////////////////////////////
  // Authentication Routes
  app.post('/api/login',
    (req, res) => {
      let jwt_token = utils.generateToken();
      res.json({
        success: true,
        token: jwt_token,
        timeout: new Date(process.env.JWT_TIMEOUT * 1000) // Date takes milliseconds
      });
    }
  );
  app.post('/api/verify', jwt_verify, (req, res) => {
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
