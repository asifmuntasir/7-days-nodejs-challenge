const http = require('http');
// const url = require('url');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        // Data read write in asynchronus way
        // fs.readFile('data.txt', (err, data) => {
        //     if(err){
        //         res.write('Failed to load data');
        //         res.end()
        //     }else{
        //         res.write(data);
        //         res.end();
        //     }
        // });

        // fs.writeFile('Data', 'Syed Nadir Ahmed SM Nurnobi', (err) =>{
        //     if(err) {
        //         res.write('Failed to write data!!!');
        //         res.end();
        //     }else{
        //         res.write('Data Successfully added.');
        //         res.end();
        //     }
        // })

        // ------------------------------------------------------------
        // Data read write in Sychronus way
        // const data2 =  fs.readFileSync('synchData.txt');
        // res.write(data2);
        // res.end();

        const data = 'Ruhul Alom';
        fs.writeFileSync('synchWrite.txt', data);
        const showdata = fs.readFileSync('synchWrite.txt', 'utf-8');
        res.write(showdata);
        res.end();


    }
});

// console.log(parseURL);

server.listen(PORT);
console.log(`Server is running at port ${PORT}`);