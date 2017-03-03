// (function() {
	"use strict";

	//// Makes Title have a blinking effect ////
	for (var i = 0; i < 1000; i++) {
		$("span").animate({
			opacity: .4 
		}, 1000).animate({
			opacity: 1 
		}, 1000)	
	}


	var usersColorSequence = [];
	var simonsColorSequence = [];

	$("#startGameBtn").click(function(){
		var roundNumber = 0;

		$("#startGameBtn").hide();
		$("h1").html("Round " + (roundNumber += 1)).css({"font-family": "'Patua One', cursive", "color":"white"});

		
		setTimeout(getSimonsSequence, 4000);

		function getSimonsSequence(){

			for (var i = 1; i <= 2; i++) {
				
				var num = Math.ceil(Math.random()*4);

				switch (num) {
					case num = 1:
						$("#greenBox").animate({
							opacity: .4 
						}, 1000).animate({
							opacity: 1 
						}, 1000)
						simonsColorSequence.push(1);
					break;
					case num = 2:
						$("#redBox").animate({
							opacity: .4 
						}, 1000).animate({
							opacity: 1 
						}, 1000)
						simonsColorSequence.push(2);
					break;
					case num = 3:
						$("#yellowBox").animate({
							opacity: .4 
						}, 1000).animate({
							opacity: 1 
						}, 1000)
						simonsColorSequence.push(3);
					break;
					case num = 4:
						$("#blueBox").animate({
							opacity: .4 
						}, 1000).animate({
							opacity: 1 
						}, 1000)
						simonsColorSequence.push(4);
					break;
				} //closes switch case
			} //closes for loop
		console.log(simonsColorSequence);
		} //closes getSimonsSequence function

		$(".colorBox").click(function(){
			$(this).animate({
				opacity: .4 
			}, 200).animate({
				opacity: 1 
			}, 200)
			usersColorSequence.push(parseInt(this.innerText));

			if (usersColorSequence.toString().indexOf(simonsColorSequence) >= 0){
				$(".alert").show().fadeOut(2000).css({"font-size":"50px", "text-align":"center"});
				setTimeout(function(){
					$("h1").html("Round " + (roundNumber += 1));
				}, 3000);

				usersColorSequence = [];
				setTimeout(getSimonsSequence, 4000);
			} 
		});	
	}); //closes click function for start game button	


// })(); //end of IIFE