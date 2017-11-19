const utils = require('./authorization/utilities');

const jwt_verify = (req, res, next) => {
  var authorization = req.header("Authorization");
  console.log(authorization)
  if (!authorization
  || authorization.split(' ').length !== 2
  || authorization.split(' ')[0].toLowerCase() !== "bearer") {
    res.status(401).json({
      success: false,
      error: "No Token: Send as Header \"Authorization: Bearer <token>\""
    });
    res.end();
    return;
  }
  var token = authorization.split(' ')[1];
  utils.verify(token, function(err, data) {
    if (err) {
      res.status(401).json({
        success: false,
        error: err
      });
      res.end();
      return;
    }
    next();
  });
};


module.exports = {
  jwt_verify
};
