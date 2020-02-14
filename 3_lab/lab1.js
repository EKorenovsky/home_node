const http = require('http');
const fs = require('fs');

let isEn = process.argv[2] == 'en';
let isRu = process.argv[2] == 'ru';

http.createServer((request, response) => {
    response.statusCode = 200;

    if (isEn) {
        fs.readFile('./stat/en.html', 'utf8', (err, data) => {
            console.log(`The file ./stat/en.html is read and sent to the client\n`);
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end(data);

        });
    }
    if (isRu) {
        fs.readFile('./stat/ru.html', 'utf8', (err, data) => {
            console.log(`The file ./stat/ru.html is read and sent to the client\n`);
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end(data);

        });
    }

}).listen(8080, () => {
    console.log('Server run in 8080 port!');
});