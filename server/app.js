const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const trunks = require('trunks-log')
const app = express();
const http = require('http');

app.use(function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of mddleware
    next();
});
// app.use(cors())
const logs = new trunks('', 'yellow', '')

// const index = require('./src/routes/index');
const { apiRoutes } = require('./src/routes/index')

// Use native ES6 Promises since mongoose's are deprecated.
mongoose.Promise = global.Promise

// Connect to the database
mongoose.connect('mongodb://localhost:27017/arbitrage', { useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// Fail on connection error.
mongoose.connection.on('error', error => { throw error })


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

const port = process.env.PORT || 3000;
// app.listen(port);
// const serverUrl = '192.168.1.109';
const serverUrl = '138.68.107.2';
http.createServer(app).listen(port, serverUrl);

logs.success('App running on http://{}:{}', serverUrl, port)