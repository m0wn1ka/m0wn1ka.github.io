const { write } = require('fs')
const net = require('net')
console.log("happeing")
const socket = net.createConnection({
 host: 'example.com',
 port: 80
})
const request = `
GET / HTTP/1.1
Host: example.com
`.slice(1)
socket.write(request)
console.log(write)
socket.pipe(process.stdout)
console.log("process .stdout is ",process.stdout)