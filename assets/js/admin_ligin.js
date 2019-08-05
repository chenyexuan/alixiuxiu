$(function(){
    $('.btn').on('click',function(){
        
        if(($('#email').val()=='')||$('#password').val()==''){
            $('.alert').fadeIn(500).delay(2000).fadeOut(500)
            return;
        }
        let data = $('form').serialize();
        console.log(data);
        $.ajax({
            type:'post',
            url:'/testEmail',
            data,
            success:function(res){
                if(res.code===400){
                    $('.alert').html(res.msg).fadeIn(500).delay(2000).fadeOut(500);
                } else{
                    location.href = '/admin/index';
                }
            }
        })
    })
})