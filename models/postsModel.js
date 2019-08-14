const con = require('../utils/myconn');
exports.getAllPosts = (obj, callback) => {
    console.log(obj);
    let sql = `SELECT posts.*,categories.\`name\`,users.nickname
    FROM posts
    JOIN categories on posts.category_id=categories.id
    JOIN users on posts.user_id = users.id
    where 1=1 `
    if (obj.cate && obj.cate != '') {
        sql += ` and category_id = ${obj.cate} `;
    }
    if (obj.status && obj.status != '') {
        sql += ` and posts.status = '${obj.status}' `;
    }
    sql += ` ORDER BY id DESC 
    LIMIT ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`;
    con.query(sql, (err, results) => {
        if (err) {
            callback(err);
        } else {
            // callback(null,results);
            // sql = `SELECT count(*) as cnt
            // FROM posts
            // JOIN categories on posts.category_id=categories.id
            // JOIN users on posts.user_id = users.id`;
            sql = `SELECT count(*) as cnt
            FROM posts
            JOIN categories on posts.category_id=categories.id
            JOIN users on posts.user_id = users.id
            where 1=1 `
            if (obj.cate && obj.cate != '') {
                sql += ` and category_id = ${obj.cate} `;
            }
            if (obj.status && obj.status != '') {
                sql += ` and posts.status = '${obj.status}' `;
            }
            // console.log(sql);
            con.query(sql, (err2, res2) => {
                if (err2) {
                    callback(err2);
                } else {
                    callback(null, { data: results, total: res2[0].cnt });
                }
            })
        }
    })
};
exports.addPost = (obj,callback)=>{
    let sql =`insert into posts set ?`;
    con.query(sql,obj,(err)=>{
        console.log(sql);
        if(err){
            callback(err);
        } else{
            callback(null);
        }
    })
}