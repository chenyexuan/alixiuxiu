const usersModel = require('../models/usersModel')
exports.testEmail = function (req, res) {
    let obj = req.body;
    // console.log(obj);
    usersModel.testEmail(obj.email, (err, data) => {
        if (err) {
            res.json({ code: 400, msg: '服务器异常' })
        } else {
            if (data) {
                if (data.password === obj.password) {
                    // 使用session写入登陆状态
                    req.session.isLogin = 'true'
                    // 将当前用户对象存储到Session
                    req.session.currentUser = data
                    res.json({ code: 200, msg: '登录成功' })
                } else {
                    res.json({ code: 400, msg: '密码错误' })
                }
            } else {
                res.json({ code: 400, msg: '邮箱错误' })
            }
        }
    })
}