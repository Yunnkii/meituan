window.onload = function(){
		var imgallery = document.getElementById('imgallery');
		var coverimg = document.getElementById('coverimgs');
	    var carou = document.getElementById('carou');
	    var previous = document.getElementById('previous');
	    var next = document.getElementById('next');
	    var candimgs = document.getElementById('candimgs');
	    var candimga =  candimgs.getElementsByTagName('a');

	    var links = document.getElementsByTagName('a');
	    var imgAmount = 2;
	    var index1 = 0; 
	    var slide = function(i){
	    	carou.style.left =  i * (-460)+'px';
	    }
	    

	    previous.onclick = function(){
	    	if(index1<=0){
	    		index1 = imgAmount-1
	    	}else{
	    		index1--;
	    	}
	    	slide(index1);
	    }
	    next.onclick = function(){
	    	if(index1>=imgAmount-1){
	    		index1=0;
	    	}else{
	    		index1++;
	    	}
	    	slide(index1);
	    }
	    var removeClass = function(){
	    	for(var j = 0;j<candimga.length;j++){
	    		candimga[j].className = ' ';
	    	}
	    }
	    for(var i = 0;i<candimga.length;i++){
	    	candimga[i].index = i;
	    	candimga[i].onmouseover = function(){
	    		removeClass();
	    		candimga[this.index].className = 'current' ;
	    		slide(this.index);
	    		index1 = this.index;
	    	}
	    }
	    var itemintro = document.getElementsByClassName('itemintro');
	      	var navrights = document.getElementsByClassName('rightnav');
	      	 //console.log(itemintro);
	      	// console.log(navrights);
	      	for(var i=0;i<itemintro.length;i++){
        		itemintro[i].index= navrights[i].index=i  ;                    //如果连等写法，那么nav2的index属性也要赋值为i，否则获取不到无法执行
        		itemintro[i].onmouseover=navrights[i].onmouseover=function(){    //连等写法
            	    clearTimeout(itemintro[this.index].timer);                  //放入则停止计时器
            	    navrights[this.index].style.display="block";
        		}
        		itemintro[i].onmouseout= navrights[i].onmouseout=function(){
            		var self=this;                               //保存当前this为self，因为下面setTimeout会改变this
           			itemintro[this.index].timer=setTimeout( function(){navrights[self.index].style.display="none";},50)   //this改为self,计时器作为每一个nav1的属性，为了保证多个物体分别计时
        		}
    		}
		
}
	
    