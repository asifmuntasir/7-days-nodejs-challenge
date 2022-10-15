const http = require('http');
// const { stringify } = require('querystring');
const PORT = 1702;

const server = http.createServer((req, res) => {
    // res.end('Hello Node');
    // console.log(req.url);
    const url = req.url;
    if (req.url == '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(`<p>This is home page</p>`);
        res.end();
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(`<p>This is ${req.url} page</p>`);
        res.end();
    }
    else if (req.url == '/user') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.write(JSON.stringify({
            name: 'Siba',
            age: 25
        }));
        res.end();
    }
    // else if (req.url == url) {
    //     res.writeHead(200, { 'Content-type': 'text/html' });
    //     res.write(`<p>This is ${req.url} page</p>`);
    //     res.end();
    // }
});

server.listen(PORT);

// server.listen(() => {
//     console.log(`Server running on port ${PORT}`)
// }, PORT);

console.log(`Server running on port ${PORT}`);