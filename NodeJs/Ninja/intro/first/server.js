const http    = require('http');

let server = http.createServer((req, res) => {
  console.log(`request has made ${req.url}`);
  res.writeHead(200, {
    'Content-Type' : 'text/plain'
  });
  res.end('Booozzz');
});

server.listen(3000, '127.0.0.1'); //Asynchronous
console.log('now listening to port 3000');
