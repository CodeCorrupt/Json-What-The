require('dotenv').config();
var CryptoJS = require("crypto-js");

var Client = require('node-rest-client').Client;
var client = new Client();

// registering remote methods
client.registerMethod("getKey", "http://localhost:8000/api/login", "get");
client.registerMethod("verify", "http://localhost:8000/api/verify", "get")

var failCount = 0;
var args = {
    headers: { "Authorization": "" } // request headers
};

// Call the verify endpoint every so often to send key
function callVerify() {
  client.methods.verify(args, function(data, response) {
    // parsed response body as js object
    console.log("VERIFY")
    console.log(data);

    if(data.success === false) {
      getKey();
    }

    setTimeout(callVerify, 2000)
  });
}

function getKey() {
  client.methods.getKey({}, function (data, response) {
    // parsed response body as js object
    console.log("GET_KEY")
    console.log(data);

    var bytes = CryptoJS.AES.decrypt(data.token.toString(), process.env.AES_SECRET);
    var decrypted = bytes.toString(CryptoJS.enc.Utf8);

    args.headers.Authorization = `Bearer ${decrypted}`
    failCount = 0;
  });
}

getKey()
setTimeout(callVerify, 2000);
