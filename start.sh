#!/bin/bash

control_c() {
    kill $CLIENT
    kill $SERVER
    exit
}

pushd ./server
npm install 2>&1 > ../server_install.log
npm start 2>&1 > ../server.log &
SERVER=$!
popd

pushd ./client
npm install 2>&1 > ../client_install.log
npm start 2>&1 > ../client.log &
CLIENT=$!
popd

trap control_c SIGINT

wait
