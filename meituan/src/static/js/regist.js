$(document).ready(function(){
  var text = $('.m-signUp .f-text');
  var mobnum = $('.u-mobile .f-text');
  var vernum = $('.verwrap .getvernum');
  text.bind(
  	'blur',function(){
  	 if(text.val()===''){
  	 	$(this).siblings('.native').css('display','none');
  	 	
  	 	$(this).siblings('.inline-tip').css('display','inline-block');
  	 	}else{

  	 	}	
  });
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