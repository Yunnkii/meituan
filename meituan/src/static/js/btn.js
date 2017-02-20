$(document).ready(function(){
	var quantity = $('#quantityinput').val();
	 	var minusbtn = $('#minusbtn');
	 	var addbtn = $('#addbtn');
	 	minusbtn.bind(
	 		'click',function(){
	 			if(quantity>0){
	 				quantity--;
	 			}
	 			$('#quantityinput').val(quantity);
            	
	 		});
        addbtn.bind(
        	'click',function(){
                quantity++;
                $('#quantityinput').val(quantity);
        	});
});