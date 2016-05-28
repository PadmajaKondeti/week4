var compGuess =0 ,yourTotal = 0, wins=0, losses=0, cryst=[], cryst1=0, cryst2=0, cryst3=0, cryst4=0;
$(document).ready(function(){
	debugger
	$("#start").on("click", function(e) {
		compGuess = Math.ceil(Math.random() * 100);
		console.log('compGuess: ' + compGuess);
		yourTotal=0;
		$("#compGuess").html(compGuess);
		$("#yourTotal").html(yourTotal);
		$('#crystal1').attr("disabled",false);
		for (var i= 0; i < 4; i++){
			cryst[i] = Math.ceil(Math.random() * 50);
			console.log('cryst['+i +']: ' + cryst[i]);
		}
		//toggleStatus();
	})
	
	$( ".crystal" ).each(function( index ) {
		$(this).on("click", function(e) {
			console.log(this);
			yourTotal = yourTotal + cryst[index];
			$("#yourTotal").html(yourTotal);
			debugger
			checkScore();
			
		})
	});
	/*for (var i= 0; i < 4; i++){
		$("#crystal"+i).on("click", function(e) {
			yourTotal = yourTotal + cryst+i;
			$("#yourTotal").html(yourTotal);
			checkScore();
		})
	}
	/*$("#crystal2").on("click", function(e) {
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
	}) */
	function checkScore(){
		debugger	
		if (yourTotal > compGuess){
			$("#gameResult").html('You Lost');
			//$("#compGuess").html(compGuess);
			//$("#yourTotal").html(yourTotal);
			losses++;
			$("#losses").html(losses);
			debugger;
			console.log("check"+this);
			toggleStatus();
			//disable($(this));
			blink();
		} else if (yourTotal == compGuess){
			$("#gameResult").html('You Won');
			$("#compGuess").html(0);
			$("#yourTotal").html(0);
			wins++;
			$("#wins").html(wins);
			//function disable(){
			//	$(this).attr("disabled","disabled");
			//	};
			blink();
		} else if (yourTotal < compGuess){
			$("#gameResult").html('Try again');
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
    //var disable = function(){
	  //  $(this).attr("disabled","disabled");
	//};
	var toggleStatus=function () {
		debugger
		/*$( ".crystal" ).each(function( index ) {
			$this = this;
			if ($this.attr('disabled') == false) {
		        $this.attr('disabled', true);
		    } else {
		         $this.attr('disabled', false);
		    } 
		})  */
	}
}


});