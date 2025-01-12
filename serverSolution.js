const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

const port = process.env.PORT || 3000;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

startServer();

// handle the error

process.on('uncaughtException', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);
  } else {
    console.error('An unexpected error occurred:', err);
    process.exit(1);
  }
});