var compGuess =0 ,yourTotal = 0, wins=0, losses=0, cryst1=0, cryst2=0, cryst3=0, cryst4=0;
$(document).ready(function(){
	$("#start").on("click", function(e) {
		compGuess = Math.ceil(Math.random() * 100);
		yourTotal=0;
		$("#compGuess").html(compGuess);
		$("#yourTotal").html(yourTotal);
		$('#crystal1').attr("disabled",false);
		toggleStatus();
	})
	$("#crystal1").on("click", function(e) {
		cryst1 = Math.ceil(Math.random() * 50);
		yourTotal = yourTotal + cryst1;
		$("#yourTotal").html(yourTotal);
		checkScore();
		toggleStatus();
	})
	$("#crystal2").on("click", function(e) {
		cryst2 = Math.ceil(Math.random() * 50);
		yourTotal = yourTotal + cryst2;
		$("#yourTotal").html(yourTotal);
		checkScore();
		toggleStatus();
	})
	$("#crystal3").on("click", function(e) {
		cryst3 = Math.ceil(Math.random() * 50);
		yourTotal = yourTotal + cryst3;
		$("#yourTotal").html(yourTotal);
		checkScore();
		toggleStatus();
	})
	$("#crystal4").on("click", function(e) {
		cryst4 = Math.ceil(Math.random() * 50);
		yourTotal = yourTotal + cryst4;
		$("#yourTotal").html(yourTotal);
		checkScore();
		toggleStatus();
	})
	function checkScore(){
		if (yourTotal > compGuess){
			$("#gameResult").html('You Lost');
			$("#compGuess").html(compGuess);
			$("#yourTotal").html(yourTotal);
			losses++;
			$("#losses").html(losses);
			debugger;
			disable($("#crystal1"));
			blink();
		} else if (yourTotal == compGuess){
			$("#gameResult").html('You Won');
			$("#compGuess").html(0);
			$("#yourTotal").html(0);
			wins++;
			$("#wins").html(wins);
			function disable(){
				$(this).attr("disabled","disabled");
				};
			blink();
		} else if (yourTotal < compGuess){
			$("#gameResult").html('Try one more time');
		}
	};
	var blink = function() {
    $('a#start').animate({
        opacity: '0'
    }, function(){
        $(this).animate({
            opacity: '1'
        }, blink);
    });
    function disable(){
	   
	    $(this).attr("disabled","disabled");
	};
	function toggleStatus() {
	    if ($('#toggleElement').is(':checked')) {
	        $('#crystal1').attr('disabled', true);
	    } else {
	        $('#crystal1').removeAttr('disabled');
	    }   
	}
}


});