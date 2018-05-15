const fs    = require('fs');
const http  = require('http');



let server  = http.createServer((req, res) => {
  console.log('requset was made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    let myReadStream  = fs.createReadStream('./index.html', 'utf8');
    res.writeHead(200, {
      'Content-Type' : 'text/html'
    });
    myReadStream.pipe(res);
  }else if (req.url === '/contact') {
    let myReadStream = fs.createReadStream('./contact.html', 'utf8');
    res.writeHead(200, {
      'Content-Type' : 'text/html'
    });
    myReadStream.pipe(res);
  }else if (req.url === '/api') {
    let ninjas = [
      {
        name: 'Ryu',
        age : 20
      },
      {
        name: 'Yoshi',
        age : 21
      }
    ];
    res.writeHead(200, {
      'Content-Type' : 'application/json'
    });
    res.end(JSON.stringify(ninjas));
  }else {
    let myReadStream = fs.createReadStream('./404.html', 'utf8');
    res.writeHead(404, {
      'Content-Type' : 'text/html'
    });
    myReadStream.pipe(res);
  }
});
server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');




// myReadStream.on('data', (chunk) => {
//   console.log('new chunk arrived: ');
//   myWriteStream.write(chunk);
//   // console.log(chunk);
// });
