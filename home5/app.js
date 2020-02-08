const express = require('express');
const app = express();
const logger = require('morgan');
const apiV1 = require('./routes/apiV1');

let options = {
    dotfiles: 'ignore',
    maxAge: "1d",
    etag: false
}
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public', options));
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use('', apiV1);


app.listen(8080);