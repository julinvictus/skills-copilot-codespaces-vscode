// Create web server
// Create a web server that listens for requests on port 3000. When a request is received, the server should respond with the contents of the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', 'utf-8', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});