const http = require('http');

http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to Homepage');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to Aboutpage');
            break;
        default:
            res.writeHead(501, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            break;
    }
}).listen(3000);

console.log('Server running on port 3000');