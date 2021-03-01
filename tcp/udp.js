const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

let port = 8081;
socket.bind(port);
console.log(`Listten on ${port}`)

/* 
sample call 
echo "hello from client" | nc -w1 -u localhost 8081
*/