$(document).ready(function(){
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
	var roundNumber = 0;
	var animateSpeedForSimon = 1000;

	//start game by pressing enter...
	$(document).keydown(function(key) {
		if(key.keyCode == 13){
			startGame();
			$("#startGameBtn").hide();
		}
	}); 
	//...or by clicking the 'Start Game' button
	$("#startGameBtn").click(startGame);

	function startGame(){
		$(this).hide();
		showNewRoundNumber();
		setTimeout(getSimonsSequence, 1000);

		$(".colorBox").click(function(){
			$(this).animate({
				opacity: .4 
			}, 100).animate({
				opacity: 1 
			}, 100)
			usersColorSequence.push(parseInt(this.innerText));

			if (usersColorSequence.toString().indexOf(simonsColorSequence) >= 0){
				$(".alert").show().fadeOut(2000).css({"font-size":"50px", "text-align":"center"}); //tell user they got the sequence correct...
				nextRound(); //...and advance them to the next round
			}
		});
	}; //closes startGame function	

	function showNewRoundNumber(){
		$("h1").html("Round <span id='fadeInNewRoundNumber'>"  + (roundNumber += 1) + "</span>").css({"font-family": "'Patua One', cursive", "color":"white", "margin":"2%"});
		$("#fadeInNewRoundNumber").hide().fadeIn(800);
	};

	function getSimonsSequence(){
		var randomBoxNumber = Math.ceil(Math.random()*4);
		simonsColorSequence.push(randomBoxNumber);
		animateSimonsSequence(simonsColorSequence);
	};

	function animateSimonsSequence() {		
		var i = 0;
		var interval = setInterval(function() { 
			switch (simonsColorSequence[i]) {
				case 1:
					$("#greenBox").animate({
						opacity: .2 
					}, (animateSpeedForSimon/2)).animate({
						opacity: 1 
					}, (animateSpeedForSimon/2));
				break;
				case 2:
					$("#redBox").animate({
						opacity: .2 
					}, (animateSpeedForSimon/2)).animate({
						opacity: 1 
					}, (animateSpeedForSimon/2));
				break;
				case 3:
					$("#yellowBox").animate({
						opacity: .2 
					}, (animateSpeedForSimon/2)).animate({
						opacity: 1 
					}, (animateSpeedForSimon/2));
				break;
				case 4:
					$("#blueBox").animate({
						opacity: .2 
					}, (animateSpeedForSimon/2)).animate({
						opacity: 1 
					}, (animateSpeedForSimon/2));
				break;
			};
			i++;
		}, animateSpeedForSimon);
	};

	function nextRound(){	
		if(roundNumber == 10){ //if it's round 10 and the user beats it, they win the game and the button to play again is shown...
			$("h1").html("You Win!!").css({"margin":"0px"});
			setInterval(function(){
				$(".colorBox, h1").animate({
					opacity: .4 
				}, 1000).animate({
					opacity: 1 
				}, 1000)		
			}, 2000);
			$("#playAgainBtn").show().css({"display":"block"});
		} else { //...else show the user the new level number they are now on
			setTimeout(function(){
				showNewRoundNumber();
				usersColorSequence = [];
				animateSpeedForSimon -= 100; //speeds up simons sequence each round	
				setTimeout(getSimonsSequence, 1000);
			}, 2000);	
		}
	};

	// reload game if user clicks 'Play Again' button after winning the game
	$("#playAgainBtn").click(function(){
		location.reload();
	});

});