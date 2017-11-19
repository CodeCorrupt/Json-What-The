#!/bin/bash

pushd ./server
npm install > ../server_install.log 2>&1
echo "SldUX1NFQ1JFVD0nd1Zwc3pYT2I3b1BOUlhSUUpKVGFQQUpTR0QnCkpXVF9USU1FT1VUID0gJzIwaCcKCkZMQUdfRU5EUE9JTlQ9J3U0MmQnCkZMQUc9J2ZsYWd7b3VyX2ZsYWd9Jwo=" | base64 --decode > .env
popd

pushd ./client
npm install > ../client_install.log 2>&1
popd

echo "Complete"
