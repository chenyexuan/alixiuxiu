$(function(){
    var pageNum=1;
    var pageSize=1;
    function init(){
        let search ={
            cate:$('.form-inline>select:first-child').val(),
            status:$('.form-inline>select:nth-child(2)').val()
        };
        $.ajax({
            type:'get',
            url:'/getAllPosts',
            data:{
                pageNum:pageNum,
                pageSize:pageSize,
                ...search
            },
            success:function(res){
                // console.log(pageNum);
                let html = template('tp',res.data);
                $('tbody').html(html);
                //
                console.log(res.data);
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
                // console.log(pageNum);
                
            }
        })
    }
    //加载分类数据
    $.ajax({
        type:'get',
        url:'/getAllCate',
        dataType:'json',
        success:function(res){
            console.log(res);
            let str ='<option value="">所有分类</option>';
            for(let i =0;i<res.data.length;i++){
                str+=`<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('.form-inline>select:first-child').html(str);
        }
    })
    console.log($('.form-inline>select:first-child').val())

    //实现筛选功能
    $('.btn-sm').on('click',function(){
        let obj ={
            cate:$('.form-inline>select:first-child').val(),
            status:$('.form-inline>select:nth-child(2)').val()
        };
        console.log(obj);
        pageNum=1;
        init();
    })
})