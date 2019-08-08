$(function(){
    var pageNum=1;
    var pageSize=1;
    function init(){
        $.ajax({
            type:'get',
            url:'/getAllPosts',
            data:{
                pageNum:pageNum,
                pageSize:pageSize,
                
            },
            success:function(res){
                console.log(pageNum);
                let html = template('tp',res.data);
                $('tbody').html(html);
                //
                setPage(Math.floor(res.data.total/pageSize));
            }
        })
    }
    init();
    
    function setPage( total, callback) {
        $(".pagination").bootstrapPaginator({
            //设置版本号
            bootstrapMajorVersion: 3,
            // 显示第几页
            currentPage: pageNum,
            // 总页数
            totalPages: total,
            //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
            onPageClicked: function (event,originalEvent,type,page) {
                // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
                pageNum = page;
                // callback && callback()
                init();
                // console.log($('.pagination>li'));
                // $('.pagination>li').removeAttr('class')
                console.log(pageNum);
                
            }
        })
    }
})