const net = require("net")

const server = net.createServer(socket => {
    socket.write("Hello.")
    socket.on("data", data => {
        console.log(data.toString())
    })
})

let port = 8080;
server.listen(port)
console.log(`Listten on ${port}`)

/* 
sample call:
telnet localhost 8000
*/