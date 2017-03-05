$(document).ready(function(){
	var arrow = $("#arrow");
	var contain = $("#contain");
	var widcon = $("#widcon");
	var page = $(".page");
	
	var imgCount = 4;
	var index = 0;
	// console.log(a[0]);
	$('html,body').animate({'scrollTop':0},100);
	$("body,html").mousewheel(function(e,delta){
		if(!widcon.is(":animated")){
			if(delta<0){

				if(index==imgCount-1){
					index = 0;
					widcon.animate({top:'0'},1000);
					if(index==0){
						$(".description").css("background-position",'0 0');
						
					}else if(index==1){
						$(".description").css("background-position",'0px -63px');
						
					}else if(index==2){
						$(".description").css("background-position",'0px -129px');
						
					}else if(index==3){
						$(".description").css("background-position",'0px -193px');
					}
					$('html,body').animate({'scrollTop':0},100);
					 
				}
				else{
					index++;
				    widcon.animate({top:'-=768px'},1000);
				    if(index==0){
						$(".description").css("background-position",'0 0');
					}else if(index==1){
						$(".description").css("background-position",'0px -63px');
					}else if(index==2){
						$(".description").css("background-position",'0px -129px');
					}else if(index==3){
						$(".description").css("background-position",'0px -193px');
					}
				    $('html,body').animate({'scrollTop':0},100);
				}
				$(".nav ul li").find(".arrow").removeClass("active");
				$(".nav ul li").find(".arrow").eq(index).addClass("active");
			}else if(delta>0){
				if(index==0){
					index=imgCount-1;
					widcon.animate({top:'-2304px'},1000);
					if(index==0){
						$(".description").css("background-position",'0 0');

					}else if(index==1){
						$(".description").css("background-position",'0px -63px');
					}else if(index==2){
						$(".description").css("background-position",'0px -129px');
					}else if(index==3){
						$(".description").css("background-position",'0px -193px');
					}
					// $(window).animate({'scrollTop':0},0);
				}else {
					index--;
					widcon.animate({top:'+=768px'},1000);
					if(index==0){
						$(".description").css("background-position",'0 0');
					}else if(index==1){
						$(".description").css("background-position",'0px -63px');
					}else if(index==2){
						$(".description").css("background-position",'0px -129px');
					}else if(index==3){
						$(".description").css("background-position",'0px -193px');
					}
					// $(window).animate({'scrollTop':0},0);
				}
				$(".nav ul li").find(".arrow").removeClass("active");
				$(".nav ul li").find(".arrow").eq(index).addClass("active");

			}
		}else{

		}  	
	
	});
	// $('.page-3').mousewheel(function(e,delta){
	// 	if(delta<0){
	// 		widcon.delay(3000);
	// 		$("#function").fadeToggle(2000);
			
	// 	}else if(delta>0){
	// 		widcon.delay(1000);
	// 		$("#function").fadeToggle(3000);

	// 	}
	// })
})
	
	
	
	
	
