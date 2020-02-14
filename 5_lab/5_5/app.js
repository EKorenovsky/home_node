let express = require('express'); //подключаем модуль express
let app = express(); //создаем приложение express
let mustacheExpress = require('mustache-express');
let bodyParser = require('body-parser');

/*подключаем модуль для обработки содержимого тела post запроса */
app.listen(8080); //Настраиваем express приложение слушать запросы на 80 порту
app.use(bodyParser.urlencoded({ extended: false }));


// Регистрируем '.mustache' расширение как шаблоны Mustache Express
app.set('views', __dirname + '/views'); //указываем расположение папки с шаблонами
app.engine('mustache', mustacheExpress()); //регистрируем шаблонизатор Mustache в Express
app.set('view engine', 'mustache'); //указываем использовать Mustache в качестве шаблонизатора



/*регистрируем модуль для обработки содержимого тела post запроса в express */
app.use(express.static('public'));



let route = require('./routes/formInfo.js'); //подключаем файл с роутом
app.use('/get-info', route);