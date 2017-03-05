$(function(){
	var mologin  = $('#mologin');
	mologin.toggle(
		function(){
			 $(mologin).html("普通方式登录<i class='ico'></i>");
			 $('.avatar').css('background-position','-1250px -581px')
			 $('.ico').css('background-position',"-611px -677px");
			 $('#userPass').attr('placeholder','动态码');
			 $('#userName').attr('placeholder','手机号');
			 $('.u-vernum').css('display','block');
			 $('#verify').css('display','none');

		},function(){
			 $(mologin).html("手机动态码登录<i class='ico'></i>");
			 $('.ico').css('background-position',"-597px -676px");
			 $('.avatar').css('background-position','-1250px -617px');
			 $('#userPass').attr('placeholder','密码');
			 $('#userName').attr('placeholder','手机号/用户名/邮箱');
			 $('.u-vernum').css('display','none');
		}
		);
	//图片验证码出现
	 $("#verbtn").click(function(){
	 	$("#verify").css('display','block');
	 });

	//登录按钮事件
	$('#submitbtn').click(function(){
		if($('#mologin').text()=="手机动态码登录"){
			if($('#userName').val()==''&&$('#userPass').val()==''){
				$('#remind').html('<i class="tip-status"></i><span class="text">请输入账号和密码</span>');
				$('#remind').css('visibility','visible');
				$("#userName").css("border-color","#f76120");
				$('#userPass').css("border-color","#f76120");
				stopFresh();
				return;
			}else if($('#userName').val()==''){
				$('#remind').html('<i class="tip-status"></i><span class="text">请输入账号</span>');
				$('#remind').css('visibility','visible');
				$('#userPass').css("border-color","#aaa");
				$("#userName").css("border-color","#f76120");
				stopFresh();
				return;
			}else if($('#userPass').val()==''){
				$('#remind').html('<i class="tip-status"></i><span class="text">请输入密码</span>');
				$('#remind').css('visibility','visible');
				$('#userPass').css("border-color","#f76120");
				$("#userName").css("border-color","#aaa");
				stopFresh();
				return;
			}else if(!checkUsernameAndPassword()){
				$('#remind').html('<i class="tip-status"></i><span class="text">账号或密码错误，请重新输入。如果已绑定手机号，建议用手机号登录</span>');
				$('#remind').css('visibility','visible');
				$("#userName").css("border-color","#f76120");
				$('#userPass').css("border-color","#f76120");
				stopFresh();
				return;
			}else{
				loginform.submit(); 

			}
		}else if($('#mologin').text()=="普通方式登录"){
			if($('#userName').val()==''&&$('#userPass').val()==''){
				$('#remind').html('<i class="tip-status"></i><span class="text">请输入手机号和动态码</span>');
				$('#remind').css('visibility','visible');
				$("#userName").css("border-color","#f76120");
				$('#userPass').css("border-color","#f76120");
				stopFresh();
				return;
			}else if($('#userName').val()==''){
				$('#remind').html('<i class="tip-status"></i><span class="text">请输入手机号</span>');
				$('#remind').css('visibility','visible');
				$('#userPass').css("border-color","#aaa");
				$("#userName").css("border-color","#f76120");
				stopFresh();
				return;
			}else if($('#userPass').val()==''){
				$('#remind').html('<i class="tip-status"></i><span class="text">请输入动态码</span>');
				$('#remind').css('visibility','visible');
				$('#userPass').css("border-color","#f76120");
				$("#userName").css("border-color","#aaa");
				stopFresh();
				return;
			}else if($('#userName').val()!=''&&checkDynamicCode($("#userPass").val())&&checkPicverm($("#picverm").val())){//动态码和图片验证码验证成功跳转
				$("#tipinfo").css('display','none');
				loginform.submit();
			}else {
				console.log("ok");
				$('#remind').html('<i class="tip-status"></i><span class="text">请输入正确的动态码和验证码</span>');
				$('#remind').css('visibility','visible');
				$('#userPass').css("border-color","#f76120");
				$("#picverm").css("border-color","#f76120");
				stopFresh();
				return;
			}

			
		}
		
	});
	//获取手机号动态码事件
	$("#verbtn").click(function(){
		$("#tipinfo").css("display",'none');
		if($("#userName").val()==''){
			$('#remind').html('<i class="tip-status"></i><span class="text">请输入手机号</span>');
			$('#remind').css('visibility','visible');
			$('#userPass').css("border-color","#aaa");
			$("#userName").css("border-color","#f76120");
		}else if(!isPhoneNo($("#userName").val())||$("#userName").val().length!=11){
			$('#remind').html('<i class="tip-status"></i><span class="text">请输入11位手机号</span>');
			$('#remind').css('visibility','visible');
			$('#userPass').css("border-color","#aaa");
			$("#userName").css("border-color","#f76120");
		}else{
			$("#verify").css('display','block');
			$("#verbtn").attr('value','重新获取');
		}

	});
	//手机号正则
	function isPhoneNo(phone) { 
        var pattern = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/; 
        return pattern.test(phone); 
    }

    //检验用户名和密码
	function checkUsernameAndPassword(){
		return false;
	}
	//检验图片验证码
	function  checkPicverm(picverm){
		return true;
	}

	//检验动态码是否正确
	function checkDynamicCode(dynamiccode){
		return false;
	}

	//阻止页面跳转
	function stopFresh(){
		$("#loginform").submit(function(){
				return false;
		});
	}
	
})
	
