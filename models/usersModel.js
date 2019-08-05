const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'root',
    database:'baixiu'
})
exports.testEmail=function(email,callback){
    // console.log(email);
    let sql = `SELECT * FROM users where \`email\`= '${email}'`;
    // console.log(sql);
    conn.query(sql,(err,results)=>{
        console.log(3);
        if(err) {
            console.log(2);
            callback(err);
        } else {
            console.log(1);
            callback(null,results[0]);   
        }
    })
}