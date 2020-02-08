const express = require('express');
const genGUID = require('uuid/v1');
const router = express.Router();


function getKey() {
    return genGUID();
}




router.post('/apiV1', function(req, res, next) {

    if (req.body.method == 'get_key')
        return res.status("200").send({ status: "success", message: "key was successfully create", key: getKey(), ip: req.connection.remoteAddress });

    if (req.body.method == 'send_lead')
        return res.status("200").send({ status: "success", message: "lead was successfully sent", data: { name: req.body.params.name, email: req.body.params.email, phone: req.body.params.phone }, key: req.body.key, ip: req.connection.remoteAddress });

    return res.status("404").send({ "status": "error", "message": "no method find", "ip": req.connection.remoteAddress });


});






module.exports = router;