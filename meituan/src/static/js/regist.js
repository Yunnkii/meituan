$(document).ready(function(){
  var mobnum = $('.u-mobile .f-text');
  var vernum = $('.verwrap .getvernum');
  var creapass = $('#creapass');
  var checkpass = $('#checkpass');
  var messver = $('.messver');
  creapass.bind(
      'blur',function(){
        var createpass = creapass.val();
      if(createpass==''){
          $(this).siblings('.native').css('display','none');
          $(this).siblings('.inline-tip').css('display','inline-block');
      }else if(createpass.length>0&&createpass.length<6){
          creapass.siblings('.inline-tip').html('<i class="tipstatus"></i>密码太短，至少6个字符');
      }else if(createpass.length>=6){
          creapass.siblings('.inline-tip').css('color','#fff');
          creapass.siblings('.inline-tip').children('.tipstatus').css('background-position','0  -451px');
      }
    }
  );
 checkpass.bind(
    'blur',function(){
    if(checkpass.val()==''){
      $(this).siblings('.native').css('display','none');
      $(this).siblings('.inline-tip').css('display','inline-block');
    }else if(checkpass.val()==creapass.val()){
      $('#checkpass').siblings('.inline-tip').css('color','#fff');
      $('#checkpass').siblings('.inline-tip').children('.tipstatus').css('background-position','0  -451px');
    }else{
      
    }
  }
  );
 messver.bind(
  'blur',function(){
    if($('.messver').val()==''){
      $(this).siblings('.native').css('display','none');
      $(this).siblings('.inline-tip').css('display','inline-block');
    }
  }
  );
	mobnum.bind('blur',vermoblie);
	vernum.bind('click',function(){
		$('.u-vbtn').css('display','block');
	});
	function vermoblie(){
    if(mobnum.val()==''){
        $(this).siblings('.native').css('display','none');
        $(this).siblings('.inline-tip').css('display','inline-block');
    } else if(isPhoneNo(mobnum.val())==true&&mobnum.val().length==11){
			 mobnum.siblings('.native').css('display','none');//注册成功后全美团通用隐藏
		   mobnum.siblings('.inline-tip').css('display','inline-block');
			 mobnum.siblings('.inline-tip').css('color','#fff');
			 mobnum.siblings('.inline-tip').children('.tipstatus').css('background-position','0  -451px');//出现对勾
		}else if(checkPhoneIsExist()){

    }else{
	 	   mobnum.siblings('.inline-tip').css('display','inline-block');
			 mobnum.siblings('.native').css('display','none');
		}
	}
  //验证手机号
  function isPhoneNo(phone) { 
 	var pattern = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/; 
 	return pattern.test(phone); 
}

   // function checkPhoneIsExist(){
   //       var phone = $("#phone").val();
   //       var flag = true;
   //       $.ajax(
   //        { url: "checkPhone?t=" + (new Date()).getTime(),
   //        {url: "checkPhone?t=" + (new Date()).getTime(),
   //          data:{},
   //          dataType:"json",
   //             type:"POST",
   //             async:false,
   //             success:function(data) {
   //             var status = data.status;
   //             if(status == "0"){
   //               flag = false;
   //             }
   //           }
   //      });
   //      return flag;
   //     }
});