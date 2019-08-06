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
}));
app.use(function(req,res,next){
    if(req.session.isLogin && req.session.isLogin=='true'||req.url=='/admin/login'||req.url.indexOf('admin/')== -1){
        next();
    } else  {
        res.redirect('/admin/login');
    }
})
// app.use(function (req, res, next) {
//     // 三种场合不用登陆
//     // 1.登陆页
//     // 2.前面三个页面不用登陆
//     // 3.有登陆状态
//     if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
//         next()
//     } else {
//         // redirect:实现重定向
//        res.redirect('/admin/login')
//     } 
// })
app.use('/assets',express.static('assets'));
app.use('/uploads', express.static('uploads'));
app.set('view engine','ejs');
app.set('views',__dirname+"/views");
app.use(router);

