const con = require('../utils/myconn');
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