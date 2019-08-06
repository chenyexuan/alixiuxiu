const mysql = require('mysql');
let con = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'root',
    database:'baixiu'
})
exports.getAllPosts=(obj,callback)=>{
    let sql =`SELECT posts.*,categories.\`name\`,users.nickname
    FROM posts
    JOIN categories on posts.category_id=categories.id
    JOIN users on posts.user_id = users.id
    ORDER BY id DESC
    LIMIT ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;
    con.query(sql,(err,results)=>{
        if(err){
            callback(err);
        } else{
            callback(null,results);
        }
    })
}