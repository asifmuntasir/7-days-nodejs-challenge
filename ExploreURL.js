const http = require('http');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const addressURL = 'http://localhost:3000/profile?name=asif&city=sylhet';

    const parseURL = url.parse(addressURL, true);
    const parseObject = parseURL.query;
    const parseObjectHost = parseURL.host;
    // console.log(parseURL);
    console.log(parseObject,'\n',parseObjectHost);
});

// console.log(parseURL);

server.listen(PORT);
console.log(`Server is running at port ${PORT}`);