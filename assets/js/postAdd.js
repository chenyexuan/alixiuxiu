$(function(){
    //上传图片
    $('#feature').on('change',function(){
        let myfile = document.querySelector('#feature').files[0];
        let formdata = new FormData();
        formdata.append('img',myfile);
        $.ajax({
            type:'post',
            url:'/uploadFile',
            data:formdata,
            dataType:'json',
            contentType:false,
            processData:false,
            success:function(res){
                // console.log(res);
                if(res.code==200){
                    $('.form-group>img').attr('src','/uploads/'+res.img).show();
                    $('[name="feature"]').val('/uploads/'+res.img);
                } else{
                    
                }
            }
        })
    })
    //动态加载分类栏
    $.ajax({
        type:'get',
        url:'/getAllCate',
        dataType:'json',
        success:function(res){
            // console.log(res);
            let str ='<option value="">所有分类</option>';
            for(let i =0;i<res.data.length;i++){
                str+=`<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('#category').html(str);
        }
    })
    //引入富文本框
    CKEDITOR.replace(content);
    //添加文章
    $('[class="btn btn-primary"]').on('click',function(){
        CKEDITOR.instances.content.updateElement();//富文本框内容同步到原有文本框内容
        let data = $('form').serialize();
        console.log(data);
        $.ajax({
            type:'post',
            url:'/addPost',
            data,
            dataType:'json',
            success:function(res){
                console.log(res);
                if(res.code==200){
                    alert(res.msg);
                    location.href = '/admin/posts';
                } else {
                    alert(res.msg);
                }
            }
        })
    })
})