# Setup for test

Note: only tested on Ubuntu 16.04

1) Ensure node and npm is installed
  1) To install node run `sudo apt install nodejs npm`
  2) If you get an error running npm start, `sudo apt install nodejs-legacy`
2) Run `npm install && npm start` in server folder
3) Run `npm install && npm start` in client folder
4) Launch Wireshark and connect to the localhost/loopback interface
5) Go! (Don't cheat and look at server or client logs)


# Setup for comp
1) Network magic to make the server talk back to itself over WiFi
2) Start server then client
3) Ensure communication between the two is visible.
