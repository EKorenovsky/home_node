const http = require('http'); // подключение модуля для работы с http
const fs = require('fs'); // подключение модуля для работы с файлом
const path = require('path'); // подключение модуля для работы с путямив файловой системе
const url = require('url');
const queryString = require('querystring');


function getImagesFomFolder() {

}

let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.json': 'application/json'
};

function getFiles(path, response) {
    fs.readdir(path, function(err, files) {
        let result = { isError: false, files: [] }
        if (err) {
            response.statusCode = 523;
            result.isError = true;
        } else {
            response.statusCode = 200;
            files.forEach(function(file) {
                result.files.push({ 'name': file, 'img': `/img/${file}` });
            });
        }
        response.end(JSON.stringify(result));
    });
}


http.createServer(function(req, res) {
    console.log(req.method);
    console.log(req.url);
    if (req.method == 'GET') {
        let pathname = url.parse(req.url).path;
        if (pathname == '/get-files') {
            getFiles(`${__dirname}/stat/img`, res);
        } else {
            if (pathname == '/') {
                pathname = '/index.html';
            }
            pathname = `${__dirname}/stat${pathname}`;
            console.log(pathname);

            let extname = path.extname(pathname);
            let mimeType = mimeTypes[extname];
            //pathname = pathname.substring(1, pathname.length);
            res.writeHead(200, {
                'Content-Type': mimeType
            });
            let newFileStream = fs.createReadStream(pathname);
            newFileStream.pipe(res);
            newFileStream.on('error', function(err) {
                console.log(err);
            });
        }
    } else {
        //console.log(req);
        let pathname = url.parse(req.url).path;
        pathname = `${__dirname}/stat/img/${pathname.substring(1, pathname.length)}`;


        let newFileStream = fs.createWriteStream(pathname);

        req.pipe(newFileStream).on('finish', () => {
            getFiles(`${__dirname}/stat/img`, res);
        });;
    }
}).listen(8080);