$(function(){
    //上次图片
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
            console.log(res);
            let str ='<option value="">所有分类</option>';
            for(let i =0;i<res.data.length;i++){
                str+=`<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('#category').html(str);
        }
    })
})