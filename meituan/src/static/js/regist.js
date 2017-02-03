$(document).ready(function(){
  var text = $('.m-signUp .f-text');
  var mobnum = $('.u-mobile .f-text');
  var vernum = $('.verwrap .getvernum');
  var creapass = $('#creapass');
  var checkpass = $('#checkpass');

  text.bind(
  	'blur',function(){
  	 if(text.val()===''){
  	 	$(this).siblings('.native').css('display','none');
  	 	$(this).siblings('.inline-tip').css('display','inline-block');
  	 	}else{

  	 	}	
  });
  creapass.bind(
      'blur',function(){
       if(creapass.val().length>0&&creapass.val().length<6){
        $('#creapass').siblings('.inline-tip').html('<i class="tipstatus"></i>密码太短，至少6个字符');
      }else if(creapass.val().length>=6){
        $('#creapass').siblings('.inline-tip').css('color','#fff');
        $('#creapass').siblings('.inline-tip').children('.tipstatus').css('background-position','0  -451px');
      }
    }
  );
  checkpass.bind(
    'blur',function(){
      if(checkpass.val()==creapass.val()){
      $('#checkpass').siblings('.inline-tip').css('color','#fff');
      $('#checkpass').siblings('.inline-tip').children('.tipstatus').css('background-position','0  -451px');
      }else{
        
      }
    }
    );
  	mobnum.bind('blur',vermoblie);
  	vernum.bind('click',function(){
  		$('.u-vbtn').css('display','block');
  	});
  	function vermoblie(){
  		if(isPhoneNo(mobnum.val())==true&&mobnum.val().length==11){
  			mobnum.siblings('.native').css('display','none');
			  mobnum.siblings('.inline-tip').css('display','inline-block');
  			mobnum.siblings('.inline-tip').css('color','#fff');
  			mobnum.siblings('.inline-tip').children('.tipstatus').css('background-position','0  -451px');
  		}else{
  	 	  mobnum.siblings('.inline-tip').css('display','inline-block');
  			mobnum.siblings('.native').css('display','none');
  			
  		}
  	}
    function isPhoneNo(phone) { 
	 	var pattern = /^1[34578]\d{9}$/; 
	 	return pattern.test(phone); 
	}


});