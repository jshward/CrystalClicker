
$(document).ready(function () {

	var wins = 0
	var losses = 0
	var playerScore = 0
	var crystalValue
	var crystalValue2
	var crystalValue3
	var crystalValue4
	var magicNumber

	//this function should give us our target nuumber

	var magicNumber = parseInt(Math.floor((Math.random() * 120) + 19));
	console.log(magicNumber);

	$("#target").text(magicNumber);


	//this should give us a random value for each crystal
	function values() {
		crystalValue = Math.floor((Math.random() * 12) + 1);
		crystalValue2 = Math.floor((Math.random() * 12) + 1);
		crystalValue3 = Math.floor((Math.random() * 12) + 1);
		crystalValue4 = Math.floor((Math.random() * 12) + 1);
		console.log(crystalValue);
		console.log(crystalValue2);
		console.log(crystalValue3);
		console.log(crystalValue4);




	};

	//set some variables to use later
	function variables() {
		var playerScore = 0;
		var cryVal;
		var newNum;
	};


	//creates the player's number
	function score() {
		$("#score").text(playerScore);
	};

	//this should set the button's values
	function buttonValues() {
		$("#first").attr("value", crystalValue);
		$("#second").attr("value", crystalValue2);
		$("#third").attr("value", crystalValue3);
		$("#fourth").attr("value", crystalValue4);
	};

	function initialize() {

		playerScore = 0
		values()
		variables()
		score()
		buttonValues()
	};
	function reset() {
		magicNumber = parseInt(Math.floor((Math.random() * 120) + 19));
		$("#target").text(magicNumber);
		playerScore = 0
		values()
		variables()
		score()
		buttonValues()
	};

	function crystalClick() {
		//console.log($(this).val());

		numString = $(this).val();
		cryVal = parseInt(numString);
		playerScore = parseInt(playerScore + cryVal);
		$("#score").html(playerScore);
		console.log(magicNumber);
		console.log(playerScore);



		if (playerScore === magicNumber) {
			console.log("win");

			wins++;
			$("#wins").html(wins);
			reset()


		}
		else if (playerScore >= magicNumber) {
			console.log("lose");

			losses++;
			$("#losses").html(losses);
			reset()
		};


	};






	initialize()

	$(".btn").click(crystalClick);







});
