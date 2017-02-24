window.onload = function(){
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