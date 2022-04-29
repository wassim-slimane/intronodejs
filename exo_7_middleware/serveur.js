const http = require('http');

const server = http.createServer((req, res) => {
  let start = performance.now();
  try {
    if (req.url === "/") {
      res.writeHead(200, {'content-type':'text/html'});
      res.write('<h1>HOMEPAGE</h1>');
    } else {
      res.writeHead(404, {'content-type':'text/html'});
      res.write('<h1>404 Not Found</h1>');
    }
  } catch (err) {
    res.writeHead(500, {'content-type':'text/html'});
    res.write('<h1>500 Internal Server Error</h1>');
  }
  res.end();
  let end = performance.now();
  console.log("requête a pris", end - start);
});

server.listen(3000);
console.log('Server écoute sur le port 3000');
