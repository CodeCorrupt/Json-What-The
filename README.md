# JSON What The?!?!
This is a CTF Challenge I wrote involving web authentication.

### Setup
Note: only tested on Ubuntu 16.04

#### Easy Mode
1. Ensure node and npm is installed
  1. To install node and npm run `sudo apt install nodejs npm`
  2. If you get an error running `npm start`, `sudo apt install nodejs-legacy`
2. run `./setup.sh` and wait for the "Complete" message
3. run `./start.sh` and wait for the "Started" message
4. Launch Wireshark and connect to the localhost/loopback interface
5. Go! (Don't cheat and look at server or client logs or the source)

#### Manual Mode
1. Ensure node and npm is installed
  1. To install node and npm run `sudo apt install nodejs npm`
  2. If you get an error running `npm start`, `sudo apt install nodejs-legacy`
2. Run `npm install && npm start` in server folder
3. Run `npm install && npm start` in client folder
4. Launch Wireshark and connect to the localhost/loopback interface
5. Go! (Don't cheat and look at server or client logs or the source)

# Setup for comp
1. Network magic to make the server talk back to itself over WiFi
2. Start server then client
3. Ensure communication between the two is visible.

# To Solve
1. In Wireshark, identify the two hosts.
  1. One will be a client sending authorization requests to the server
2. Find the Authorization header the client is sending. It will be a Bearer token (JWT Token)
3. Decode this token to find there is a hidden endpoint on the server that has the flag
4. Send a GET request to that endpoint with the authorization header seen in the requests from the client
5. Server will respond with the flag

Note: The server will rotate the JWT every 20 seconds meaning that you have a max of 20 seconds to use the token
Note: If you try and hit the flag endpoint without the header it will give you a nice hint that you need the Authorization header
