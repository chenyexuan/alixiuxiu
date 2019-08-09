const formidable = require('formidable');
let path = require('path');
exports.uploadFile = (req,res)=>{
    let form = new formidable.IncomingForm();
    form.encoding='utf-8';
    form.uploadDir = __dirname+'/../uploads';
    form.keepExtensions = true;
    form.parse(req,(err,fields,files)=>{
        if(err){
            res.json({
                code:400,
                msg:'文件上次失败'
            })
        } else{
            let imgName = path.basename(files.img.path);
            res.json({
                code:200,
                msg:'文件上次成功',
                img:imgName
            })
        }
    })
}