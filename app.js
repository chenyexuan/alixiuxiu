const express = require('express');
const app = express();
const router = require('./router');
const session = require('express-session');
const bodyParser = require('body-parser');
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret:'my_albx_35',
    resave:false,
    saveUninitialized:false
}))
app.use('/assets',express.static('assets'));
app.use('/uploads', express.static('uploads'));
app.set('view engine','ejs');
app.set('views',__dirname+"/views");
app.use(router);

