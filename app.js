const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
});
app.use('/assets',express.static('assets'));
app.use('/uploads', express.static('uploads'));
app.set('view engine','ejs');
app.set('views',__dirname+"/views");
app.use(router);

