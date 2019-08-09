const con = require('../utils/myconn');

exports.testEmail=function(email,callback){
    // console.log(email);
    let sql = `SELECT * FROM users where \`email\`= '${email}'`;
    // console.log(sql);
    con.query(sql,(err,results)=>{
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