const fs    = require('fs');
const http  = require('http');

let myReadStream  = fs.createReadStream('./index.html', 'utf8');

let server  = http.createServer((req, res) => {
  console.log('requset was made: ' + req.url);
  res.writeHead(200, {
    'Content-Type' : 'application/json'
  });
  var myObj = {
    name  : 'Ryu',
    Job   : 'Ninja'
  }
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');

// let server  = http.createServer((req, res) => {
//   console.log('requset was made: ' + req.url);
//   res.writeHead(200, {
//     'Content-Type' : 'text/html'
//   });
//   myReadStream.pipe(res);
// });


// myReadStream.on('data', (chunk) => {
//   console.log('new chunk arrived: ');
//   myWriteStream.write(chunk);
//   // console.log(chunk);
// });
