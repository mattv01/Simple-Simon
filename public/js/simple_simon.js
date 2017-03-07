$(document).ready(function(){
	"use strict";

	//// Makes title have a blinking effect ////
	for (var i = 0; i < 1000; i++) {
		$("span").animate({
			opacity: .4 
		}, 1000).animate({
			opacity: 5 
		}, 1000);
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
		$(".colorBox").click(UsersInput);
	};

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

	function UsersInput(){
		$(this).animate({
			opacity: .4 
		}, 100).animate({
			opacity: 1 
		}, 100);
		usersColorSequence.push(parseInt(this.innerText));
		checkUsersInput();
	};

	function checkUsersInput(){
		if (usersColorSequence[usersColorSequence.length - 1] !== simonsColorSequence[usersColorSequence.length - 1]){
			setInterval(animateLostGameScreen, 500);
			tryAgain();
		} else if (usersColorSequence.toString().indexOf(simonsColorSequence) >= 0){
			$(".alert").show().fadeOut(2000).css({"font-size":"50px", "text-align":"center"}); //tell user they got the sequence correct...
			nextRound(); //...and advance them to the next round		
		}
	};

	function nextRound(){
		if(roundNumber == 10){ //if it's round 10 and the user beats it, they win the game...
			setTimeout(userWonGame, 500);
		} else { //...else show the user the new level number they are on
			setTimeout(newRound, 2000);
		}
	};

	function newRound(){
		showNewRoundNumber();
		usersColorSequence = [];
		animateSpeedForSimon -= 100; //speeds up simons sequence each round
		setTimeout(getSimonsSequence, 1000);
	};

	function userWonGame(){
		setInterval(animateGameWonScreen, 500);
		playAgain();
	};

	function animateGameWonScreen(){
		$("h1").html("You Win!!").css({"margin":"0px"});
		$(".colorBox, h1").animate({
			opacity: .4
		}, 1000).animate({
			opacity: 1
		}, 1000);
		$("#playAgainBtn").show().css({"display":"block"});
	};

	function playAgain(){
		$("#playAgainBtn").click(function(){
			location.reload(); //reload game if user clicks 'Play Again' button after winning the game
		});
	};

	function animateLostGameScreen(){
		$("h1").html("You Lose").css({"margin":"0px"});
		$(".colorBox, h1").animate({
			opacity: .4
		}, 1000).animate({
			opacity: 1
		}, 1000);
		$("#tryAgainBtn").show().css({"display":"block"});
	};

	function tryAgain(){
		$("#tryAgainBtn").click(function(){
			location.reload();
		});
	};

});