module.exports.getIndex = function(req,res){
    res.render('../views/index');
};
module.exports.getDetail =function(req,res){
    res.render('../views/detail.ejs');
};
exports.getList = function(req,res){
    res.render('../views/list.ejs');
};
exports.getAdminCategories =function(req,res){
    res.render('../views/admin/categories.ejs');
};
exports.getAdminComments = function(req,res){
    res.render('../views/admin/comments.ejs');
};
exports.getAdminIndex = function(req,res){
    res.render('../views/admin/index.ejs');
};
exports.getAdminLogin = function(req,res){
    res.render('../views/admin/login.ejs')
};
exports.getAdminNavMenu = function(req,res){
    res.render('../views/admin/nav-menus.ejs')
};
exports.getAdminPassword = function(req,res){
    res.render('../views/admin/password-reset.ejs')
};
exports.getAdminPostAdd = function(req,res){
    res.render('../views/admin/post-add.ejs')
};
exports.getAdminPosts = function(req,res){
    res.render('../views/admin/posts.ejs')
};
exports.getAdminProfile = function(req,res){
    res.render('../views/admin/profile.ejs')
};
exports.getAdminSettings = function(req,res){
    res.render('../views/admin/settings.ejs')
};
exports.getAdminSlides = function(req,res){
    res.render('../views/admin/slides.ejs')
};
exports.getAdminUsers = function(req,res){
    res.render('../views/admin/users.ejs')
};
