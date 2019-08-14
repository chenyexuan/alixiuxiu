const postsModel = require('../models/postsModel');
const moment = require('moment');
exports.getAllPosts=(req,res)=>{
    let obj = req.query;
    postsModel.getAllPosts(obj,(err,data)=>{
        
        if(err){
            console.log(err);
            res.json({code:400,msg:'服务器查询错误'})
        } else{
            // for(let i=0;i<data.length;i++){
            //     data[i].created = moment(data[i].created).format('YYYY-MM-DD HH:mm:ss');
            // }
            res.json({
                code:200,
                msg:'查询成功',
                data
            })
        }
    })
};
exports.addPost = (req,res)=>{
    let obj =req.body;
    obj.views =0;
    obj.likes=0;
    obj.user_id=req.session.currentUser.id;
    postsModel.addPost(obj,(err,data)=>{
        if(err){
            res.json({
                code:400,
                msg:'添加文章失败'
            })
        } else{
            res.json({
                code:200,
                msg:'添加文章成功'
            })
        }
    })
}