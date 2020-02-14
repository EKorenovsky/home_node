let express = require('express'); //подключаем модуль express
let router = express.Router(); //создаем новый роутер

router.post('', (req, res, next) => { //вешаем на роут обработчик get запросов
    //Выводим параметры из маршрута
    res.send(JSON.stringify(req.body));
});
module.exports = router; //Экспортируем роутер из модуля