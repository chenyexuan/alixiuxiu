const mysql = require('mysql');
let con = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'root',
    database:'baixiu',
    dateStrings:true
})
exports.getAllCate = (callback)=>{
    let sql =`select * from categories`;
    con.query(sql,(err,data)=>{
        if(err){
            callback(err);
        } else{
            callback(null,data);
        }
    })
}