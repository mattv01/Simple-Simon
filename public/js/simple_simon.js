// (function() {
	"use strict";

	//// Makes title have a blinking effect ////
	for (var i = 0; i < 1000; i++) {
		$("span").animate({
			opacity: .4 
		}, 1000).animate({
			opacity: 5 
		}, 1000)	
	}

	var usersColorSequence = [];
	var simonsColorSequence = [];
	var roundNumber = 1;
	var animateSpeedForSimon = 1000;

	$("#startGameBtn").click(function(){
		$(this).hide();

		$("h1").html("Round " + (roundNumber)).css({"font-family": "'Patua One', cursive", "color":"white", "margin":"2%"});
		
		setTimeout(getSimonsSequence, 2000);

		function getSimonsSequence(){
			var randomBoxNumber = Math.ceil(Math.random()*4);
			simonsColorSequence.push(randomBoxNumber);
			animate(simonsColorSequence);
			console.log(simonsColorSequence); //DELETE WHEN GAME IS COMPLETELY FINISHED//
		};

		function animate() {		
			var i = 0;
			var interval = setInterval(function() { 
				switch (simonsColorSequence[i]) {
					case 1:
						$("#greenBox").animate({
							opacity: .2 
						}, (animateSpeedForSimon/2)).animate({
							opacity: 1 
						}, (animateSpeedForSimon/2))
					break;
					case 2:
						$("#redBox").animate({
							opacity: .2 
						}, (animateSpeedForSimon/2)).animate({
							opacity: 1 
						}, (animateSpeedForSimon/2))
					break;
					case 3:
						$("#yellowBox").animate({
							opacity: .2 
						}, (animateSpeedForSimon/2)).animate({
							opacity: 1 
						}, (animateSpeedForSimon/2))
					break;
					case 4:
						$("#blueBox").animate({
							opacity: .2 
						}, (animateSpeedForSimon/2)).animate({
							opacity: 1 
						}, (animateSpeedForSimon/2))
					break;
				}//closes switch statement
				i++;
			}, animateSpeedForSimon);//closes setInterval
		};//closes animate function

		$(".colorBox").click(function(){
			$(this).animate({
				opacity: .4 
			}, 100).animate({
				opacity: 1 
			}, 100)
			usersColorSequence.push(parseInt(this.innerText));

			if (usersColorSequence.toString().indexOf(simonsColorSequence) >= 0){
				//tell user they got the sequence correct...
				$(".alert").show().fadeOut(2000).css({"font-size":"50px", "text-align":"center"});
				//...and advance them to the next round
				nextRound();
			}
		});

		function nextRound(){
			// if user beats round 10, they win the game and have a chance to play again
			if(roundNumber == 10){
				$("h1").html("You Win!!").css({"margin":"0px"});
				setInterval(
				function(){
					$(".colorBox, h1").animate({
						opacity: .4 
					}, 1000).animate({
						opacity: 1 
					}, 1000)		
				}, 2000);
				$("#playAgainBtn").show().css({"display":"block"});
			} else {
				// show the user the level they are on now and show simons sequence faster
				setTimeout(function(){
					$("h1").html("Round <span id='fadeRoundNumber'>"  + (roundNumber += 1) + "</span>");
					$("#fadeRoundNumber").hide().fadeIn();
					usersColorSequence = [];
					animateSpeedForSimon -= 100; //speeds up simons sequence each round	
					setTimeout(getSimonsSequence, 1000);
				}, 2000);	
			} //closes if statement
		}; //closes nextRound function

	}); //closes click function for start game button	

	// reload game if user wants to play again after winning the game
	$("#playAgainBtn").click(function(){
		location.reload();
	});

// })(); //end of IIFE