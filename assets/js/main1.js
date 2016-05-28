var compGuess =0 ,yourTotal = 0, start_flag=0,  wins=0, losses=0, cryst=[];
//turning on and off buttons
var toggleStatus = function () {
	for (var i =0; i < 4; i++){
		if ($("#crystal"+i).attr( "disabled") == true ){
			$("#crystal"+i).attr( "disabled", false);
			
		}else {
			$("#crystal"+i).attr( "disabled", true);	 
		};
		cryst[i] =0;
	}  
};
//turning on the buttons
var enable = function () {
	for (var i =0; i < 4; i++){
		$("#crystal"+i).attr( "disabled", false );
	}  
};
/*var blink = function() {
    	$('a#start').animate({
        	opacity: '0'
    	}, function(){
        	$(this).animate({
            opacity: '1'
        	}, blink);
    });
}; */
 var checkScore = function(){	
	if (yourTotal > compGuess){
		//lost the game
		$("#gameResult").html('You Lost');
		if (start_flag !=0){
			losses++;
			start_flag  =0;
		};
		$("#losses").html(losses);
		toggleStatus();
		//blink();
	} else if (yourTotal == compGuess){
		// won the game
		$("#gameResult").html('You Won');
		$("#compGuess").html(0);
		$("#yourTotal").html(0);

		if (start_flag !=0){
			wins++;
			start_flag  =0;
		};
		$("#wins").html(wins);
		toggleStatus();
		//blink();
	} else if (yourTotal < compGuess){
		//try again to score more ponts
		$("#gameResult").html('Try again');
	}
};
$(document).ready(function(){
	$("#start").on("click", function(e) {
		compGuess =Math.ceil(Math.random() * 100);
		yourTotal=0;
		start_flag=1; 
		$("#compGuess").html(compGuess);
		$("#yourTotal").html(yourTotal);
		enable();
		for (var i= 0; i < 4; i++){
			cryst[i] =Math.ceil(Math.random() * 50);
		}
	})
	
	$( ".crystal" ).each(function(index) {
		$(this).on("click", function(e) {
			//console.log(this);
			yourTotal = yourTotal + cryst[index];
			$("#yourTotal").html(yourTotal);
			checkScore();
			
		})
	});

})