const http = require('http');
const fs = require('fs');


const PORT = 3000;

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Conent-Type': 'text/html' });
        res.write('<h1>Welcome to Full Stack Development</h1>');
        res.end();
    } else if (req.url === '/read') {
        fs.readFile('first.txt', (err, data) => {
            if (err) {
                res.write('Failed to load data!');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else if (req.url === '/write') {
        fs.writeFile('second.txt', 'I am a pull stack developer!!! 😄', (err) => {
            if (err) {
                res.write('Failed to write data');
                res.end();
            } else {
                res.write('Data successfully added');
                res.end();
            }
        });
    } else if (req.url === '/append') {
        fs.appendFile('first.txt', 'No! It will be full not pull ! 😑', (err,) => {
            if (err) {
                res.write('Falied to append data');
                res.end();
            } else {
                res.write('Data successfully updated!');
                res.end();
            }
        })
    } else if (req.url === '/delete') {
        fs.unlink('second.txt', (err) => {
            if (err) throw err;
            console.log('File deleted successfully!');
        })
    }
}).listen(PORT);

console.log('Server running on port ', PORT);

// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.write('Hello Node');
// res.end();