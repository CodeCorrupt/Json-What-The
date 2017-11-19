var Client = require('node-rest-client').Client;
var client = new Client();

// registering remote methods
client.registerMethod("getKey", "http://localhost:8000/api/login", "post");
client.registerMethod("verify", "http://localhost:8000/api/verify", "post")

let failCount = 0;
let args = {
    headers: { "Authorization": "" } // request headers
};

// Call the verify endpoint every so often to send key
function callVerify() {
  client.methods.verify(args, function(data, response) {
    // parsed response body as js object
    console.log("VERIFY")
    console.log(data);

    if(data.success === false) {
      failCount++;
    }
    if(failCount > 1) {
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

    args.headers.Authorization = `Bearer ${data.token}`
    failCount = 0;
  });
}

getKey()
callVerify();