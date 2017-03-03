// (function() {
	"use strict";

	//// Makes Title have a blinking effect ////
	for (var i = 0; i < 100; i++) {
		$("span").animate({
			opacity: .4 
		}, 1000).animate({
			opacity: 1 
		}, 1000)	
	}


	var usersColorSequence = [];
	var simonsColorSequence = [];

	$("#startGameBtn").click(function(){

		$("#startGameBtn").hide();

		setTimeout(getSimonsSequence, 2000);

		function getSimonsSequence(){

			for (var i = 1; i <= 4; i++) {
				
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
	}); //closes click function for start game button	


	$(".colorBox").click(function(){
		$(this).animate({
			opacity: .4 
		}, 300).animate({
			opacity: 1 
		}, 300)
		usersColorSequence.push(parseInt(this.innerText));
	});

// })(); //end of IIFE