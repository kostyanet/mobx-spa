const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const path = require('path');

const http = require('http');
const PORT = 3030;
const app = express();

app.set('port', PORT);

app.use(logger(':method :url :status :response-time ms - :date[web]'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorHandler());

app.post('/login', function (req, res, next) {
    var name = req.body.username;
    var pass = req.body.password;

    var msg;
    var obj = {
        login:  name,
        token:  Math.random().toString(16).substring(2) + '=='
    };

    console.log('User: ' + name + '\n' + 'Pass: ' + pass);
    // console.log(Object.keys(req));

    /* Checking the credentials */
    if (name === 'User' && pass === 'Pass1') {
        //res.body = obj;
        replyWith(res, obj, 200);
        return;

    } else if (name !== 'User') {
        msg = 'Unknown username.';

    } else if (pass !== 'Pass1') {
        msg = 'Incorrect password.';
    }

    obj = {
        error: msg,
        statusText: msg
    };

    replyWith(res, obj, 401);
});

app.listen(PORT, function (err) {
    if (err) {
        return console.error(err);
    }

    console.log(`Listening at http://localhost:${PORT}/`);
});


/* Sends the delayed response */
function replyWith(res, obj, status) {
    setTimeout(function () {
        res
            .set({
                'Content-Type': 'application/json; charset=utf-8',
                'Cache-Control': 'public, max-age=86400'
            })
            .status(status)
            .json(obj)
            .end();

        console.log(obj);
    }, 700);
}