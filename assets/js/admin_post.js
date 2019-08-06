$(function(){
    $.ajax({
        type:'get',
        url:'/getAllPosts',
        data:{
            pageNum:2,
            pageSize:2
        },
        success:function(res){
            console.log(res);
            let html = template('tp',res);
            $('tbody').html(html);
        }
    })
})