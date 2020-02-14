let express = require('express'); //подключаем модуль express
let app = express(); //создаем приложение express
let bodyParser = require('body-parser');

/*подключаем модуль для обработки содержимого тела post запроса */
app.listen(8080); //Настраиваем express приложение слушать запросы на 80 порту
app.use(bodyParser.urlencoded({ extended: false }));

/*регистрируем модуль для обработки содержимого тела post запроса в express */
app.use(express.static('public'));



let route = require('./routes/formInfo.js'); //подключаем файл с роутом
app.use('/get-info', route);
/*регистрируем роут, все url начинающиеся с /products будут передаваться в обработку в этот роут*/