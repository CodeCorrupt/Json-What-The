#!/bin/bash

pushd ./server
npm install > ../server_install.log 2>&1
echo "SldUX1NFQ1JFVD0nd1Zwc3pYT2I3b1BOUlhSUUpKVGFQQUpTR0QnCkpXVF9USU1FT1VUPScyMHMnCgpBRVNfU0VDUkVUPSdrODRrM3NrZGY4MjQza3Nka2pzZGYnCgpGTEFHX0VORFBPSU5UPSd1NDJkJwpGTEFHPSdCU2lkZXN7SmFzb25zX1N1cGVyX1NlY3JldF9GbGFnfScK" | base64 --decode > .env
popd

pushd ./client
npm install > ../client_install.log 2>&1
echo "QUVTX1NFQ1JFVD0nazg0azNza2RmODI0M2tzZGtqc2RmJwo=" | base64 --decode > .env
popd

echo "Complete"
