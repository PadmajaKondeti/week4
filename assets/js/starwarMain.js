 
$(document).ready(function() {

   $(".character").on("click", function(){
   		
   		AddToEnemies(this);
   		
	});

	function AddToEnemies(obj) {
		debugger
	var $this = $(obj).closest('div');
	console.log($this);
	var img = $this.find('div');
	console.log(img);
	$('#charEnemies').append(img);
	}

		/*$('.img-thumbnail').each(function() {
			 var wrap = $(this);
			 var hi = wrap.closest('.img-thumbnail').find('#charEnemies');
			 //wrap.find('img').each(function() {
			 var img = $(this);
			 img.remove().appendTo(hi);
			 //});
		  //});

   		$(this).css("float", "left"); */

                       
});