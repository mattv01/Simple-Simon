// (function() {
	"use strict";

	var usersColorSequence = [];
	var simonsColorSequence = [];


	$("#startGameBtn").click(function(){

		$("#startGameBtn").hide();

		setTimeout(getSimonsSequence, 2000);

		function getSimonsSequence(){

			for (var i = 1; i <= 4; i++) {
				
				var num = (Math.floor(Math.random()*4) + 1);
	
				switch (num) {
					case num = 1:
						$("#redBox").animate({
							opacity: .3 
						}, 1000).animate({
							opacity: 1 
						}, 1000)
						simonsColorSequence.push(1);
					break;
					case num = 2:
						$("#blueBox").animate({
							opacity: .3 
						}, 1000).animate({
							opacity: 1 
						}, 1000)
						simonsColorSequence.push(2);
					break;
					case num = 3:
						$("#yellowBox").animate({
							opacity: .3 
						}, 1000).animate({
							opacity: 1 
						}, 1000)
						simonsColorSequence.push(3);
					break;
					case num = 4:
						$("#greenBox").animate({
							opacity: .3 
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
			opacity: .3 
		}, 500).animate({
			opacity: 1 
		}, 500)
		usersColorSequence.push(parseInt(this.innerText));
	});


// })(); //end of IIFE

