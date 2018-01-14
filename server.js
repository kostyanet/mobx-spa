/* Dependecies declaration */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const path = require('path');
// var webpack = require('webpack');
// var config = require('./webpack.config');

const http = require('http');
const PORT = 3030;

// var compiler = webpack(config);
const app = express();
app.set('port', PORT);

/* Middleware stack */
// app.use(logger('dev'));
app.use(logger(':method :url :status :response-time ms - :date[web]'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname));
// app.use(require('webpack-dev-middleware')(compiler, {
//     publicPath: config.output.publicPath
// }));
//
// app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
//     res.sendFile(path.join(__dirname, '/node_modules/bootstrap/dist/css/bootstrap.min.css'));
//     res.sendFile(path.join(__dirname, '/static/style.css'));
// });
app.use(errorHandler());

/* POST handler */
app.post('/login', function(req, res, next) {
    let name = req.body.Username;
    let pass = req.body.Password;

    console.log('User: ' + name + '\n' + 'Pass: ' + pass);
    // console.log(Object.keys(req));

    /* Checking the credentials */
    if (name === 'Username' && pass === 'Password') {
        replyWith(res, {
            "Auth": "Logged",
            "Language": "EN"
        });
    } else {
        replyWith(res, { Auth: "Denied" });
    }
});

/* The server starts on */
/*http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});*/

app.listen(PORT, function(err) {
    if (err) {
        return console.error(err);
    }

    console.log(`Listening at http://localhost:${PORT}/`);
});

/* Sends the delayed response */
function replyWith(res, obj) {
    setTimeout(function() {
        res
            .set({
                'Content-Type': 'application/json; charset=utf-8',
                'Cache-Control': 'public, max-age=86400'
            })
            .status(200)
            .json(obj)
            .end();

        console.log(obj);
    }, 1500);
}


// import express from 'express';
// import path from 'path';
//
// const PORT = 7700;
// const USERS = [
//     { id: 1, name: "Alexey", age: 30 },
//     { id: 2, name: "Ignat", age: 15 },
//     { id: 3, name: "Sergey", age: 26 },
// ];
// const PUBLIC_PATH = __dirname + '/public';
//
// const app = express();
// const isDevelopment = process.env.NODE_ENV === 'development';
//
// if (isDevelopment) {
//     const webpack = require('webpack');
//     const webpackConfig = require('./webpack.config.babel').default;
//     const compiler = webpack(webpackConfig);
//     app.use(require('webpack-dev-middleware')(compiler, {
//         hot: true,
//         stats: {
//             colors: true
//         }
//     }));
//     app.use(require('webpack-hot-middleware')(compiler));
// } else {
//     app.use(express.static(PUBLIC_PATH));
// }
//
// app.get("/users", function(req, res) {
//     res.send(USERS);
// });
//
// app.all("*", function(req, res) {
//     res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
// });
//
// app.listen(PORT, function() {
//     console.log('Listening on port ' + PORT + '...');
// });
