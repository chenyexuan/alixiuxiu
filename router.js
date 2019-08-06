const express = require('express');
const pageController = require('./controls/pageController');
const usersController = require('./controls/usersController');
const postsController = require('./controls/postsController');
let router = express.Router();
router.get('/',pageController.getIndex)
    .get('/detail',pageController.getDetail)
    .get('/list',pageController.getList)
    .get('/admin/categories',pageController.getAdminCategories)
    .get('/admin/comments',pageController.getAdminComments)
    .get('/admin/index',pageController.getAdminIndex)
    .get('/admin/login',pageController.getAdminLogin)
    .get('/admin/nav-menus',pageController.getAdminNavMenu)
    .get('/admin/password-reset',pageController.getAdminPassword)
    .get('/admin/post-add',pageController.getAdminPostAdd)
    .get('/admin/posts',pageController.getAdminPosts)
    .get('/admin/profile',pageController.getAdminProfile)
    .get('/admin/settings',pageController.getAdminSettings)
    .get('/admin/slides',pageController.getAdminSlides)
    .get('/admin/users',pageController.getAdminUsers)
    .post('/testEmail',usersController.testEmail)
    .get('/getAllPosts',postsController.getAllPosts);
module.exports=router;