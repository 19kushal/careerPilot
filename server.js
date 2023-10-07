const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const multer = require('multer');
const mongoose = require('mongoose'); 
let bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
 
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


const initRoutes = require('./routes');
// Session 
app.use(session({
    cookie: {
        path: '/',
        httpOnly: true,
    },
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
})
);

// Storage 
const  Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images');
    },
    filename: function(req, file, callback) {  
        callback(null, file.originalname + '-' + Date.now() + path.extname(file.originalname)
        );
    }
});
const upload = multer({ storage: Storage }).single('filename');

// Connection to mongo db
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log('Not connected to database', err);
});

initRoutes(app);


  let port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log("Listening on port 3000");
  });




