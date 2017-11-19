#!/bin/bash

control_c() {
    kill $CLIENT
    kill $SERVER
    exit
}

pushd ./server
npm start > ../server.log 2>&1 &
SERVER=$!
popd

sleep 2

pushd ./client
npm start > ../client.log 2>&1 &
CLIENT=$!
popd

echo "Started"

trap control_c SIGINT

wait
