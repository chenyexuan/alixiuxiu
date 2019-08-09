$(function(){
    let menuPosts = $('#menu-posts');
    // console.log($('.aside>.nav>li'));
    let menuSettings = $('#menu-settings');
    let urlTotal = location.href.substring(location.href.lastIndexOf('/')+1);
    let urlName = location.href.substring(location.href.lastIndexOf('/')+1/* ,location.href.indexOf('?') */);
    console.log(urlName);
    $('.aside>.nav>li').removeClass('active');
    $(`[href="${urlName}"]`).parent().addClass('active');
    if(urlName=='posts'||urlName=='post-add'||urlName=='categories'){
        // $('.aside>.nav>li').removeClass('active');
        // $('.aside>.nav>li:nth-child(2)').addClass('active');
        menuPosts.addClass('in').attr('aria-expanded',true);
        menuPosts.parent().find('.collapsed').removeClass('collapsed');
        // $(`[href="${urlName}"]`).parent().addClass('active');
    }
    if(urlName=='nav-menus'||urlName=='slides'||urlName=='settings'){
        
        menuSettings.addClass('in').attr('aria-expanded',true);
        menuSettings.parent().find('.collapsed').removeClass('collapsed');
        // $(`[href="${urlName}"]`).parent().addClass('active');
    }
})