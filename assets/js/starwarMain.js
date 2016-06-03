function AddRestToEnemies() {
	$('.character').each(function(){
		var $this = $(this);
		if ($this.data('sel-status') != "yourchar"){
			var $this = $(this).closest('div');
			console.log($this);
			console.log($this.data("sel-status"	));
			$this.removeClass('character').addClass('enemie');
			$this.animate({
			height:'187px',
			width:'187px',
			left:'5px'
			});
			$this.css({'background-color': 'red', 'margin-right':'10px'});
			$('#charEnemies').append($this);
		}
	})
	
} 

$(document).on('click', ".enemie", function AddToDefender() {
	$this = $(this);
	$this.removeClass('enemie').addClass('defender');
   	$this.data("sel-status","defender");
   	$this.animate({
		height:'187px',
		width:'187px',
		left:'5px'
	});
	$this.css({'background-color': 'green'});
	$('#charDefender').append($this);
});

$(document).ready(function() {
   $(".character").on("click", function(){
		$this = $(this);
   		$this.data("sel-status","yourchar");
   		AddRestToEnemies();
   	 });	
});