var playBtn = document.querySelector("button");
var msg = document.querySelector(".msg");
var colorCode = [];
var playerIn = [];
var inputReady = false;
var score = -1;
var j = 0;
var colorArr = ['green', 'blue', 'red', 'yellow'];

var beep = {
	blue: new Audio ('beep1.wav'),
	red: new Audio ('beep2.wav'),
	yellow: new Audio ('beep3.wav'),
	green: new Audio ('beep4.wav')
};

var sqr = {
	blue: document.querySelector(".blue"),
	red: document.querySelector(".red"),
	yellow: document.querySelector(".yellow"),
	green: document.querySelector(".green")
};

//Ever 700 ms, doMove is run inside of flashSequence using setInterval (for loop doesn't work with this). Continues until the length of the colorCode is reached.
function flashSequence(){
	score++;
	
	inputReady = false;
	newColorCode()
	var i = 0;
	var seq = setInterval(function(){
		inputReady = false;
		doMove(colorCode[i]);
		i++;
		if (i >= colorCode.length){
			clearInterval(seq);
			inputReady = true;
		}
	}, 700)
	
	
}

//generates a random number between 1 and 4 and adds it to the colorCode array, runs inside flashSequence.
function newColorCode(){
	var randNum = Math.floor(Math.random() * 4);
	colorCode.push(colorArr[randNum]);
	
}

//checks the number created by newColorCode and adds the class "flash" and plays the corresponding beep noise. Removes class after 500 ms.
function doMove(tileKey){

	sqr[tileKey].classList.add("flash");
	beep[tileKey].play();
	setTimeout(function(){
		sqr[tileKey].classList.remove("flash");
	}, 500);
	
}

//called inside event listeners for each square.
//checks whether each new response from the user (playerIn[j]) matches the corresponding position in colorCode (colorCode[j])
//If they don't match, you get a 'you lose' message and reset function is called
//If they do match but the player input isn't the same length as the colorCode, then 1 is added to the j counter so that the next position along will be compared
//If they do match and the length of player input and colorCode are the same, the player input is cleared for the next round, j is reset to start again from
//the 0th position in both arrays, and flashsequence is called (ie. a new round begins)
function checkMoves(){
	inputReady = false;
	
		if (colorCode[j] != playerIn[j]){
			msg.innerHTML = "<p>You Lost! Your score is " + score + "</p>";
			reset()
		}
		
		else if (colorCode[j] == playerIn[j] && playerIn.length < colorCode.length){
			j++;
			inputReady = true;
			
		}

		else if (colorCode[j] == playerIn[j] && playerIn.length == colorCode.length){
			playerIn = [];
			inputReady = false;
			j = 0;
			flashSequence();
		}
		
	

}


//puts everything back to how it was before the game started
function reset(){
	score = -1;
	colorCode = [];
	playerIn = [];
	j = 0;
}

//start point for the game- resets everything back to the beginning of game (using reset function) and calls flashsequence to begin the game.
playBtn.addEventListener("click", function(){
	reset();
	msg.innerHTML = "";
	flashSequence();
});


//event listeners for each square of the game. Checks the game is ready for player input, then pushes the corresponding tile click number
//into the playerIn array. Plays the corresponding beep noise, then calls checkMoves()
sqr.blue.onclick = function(){
	if(inputReady == true){	
	playerIn.push("blue");
	beep.blue.play();
	checkMoves();
	}
}
sqr.red.onclick = function(){
	if(inputReady == true){	
	playerIn.push("red");
	beep.red.play();
	checkMoves();
	}
}
sqr.yellow.onclick = function(){
	if(inputReady == true){
	playerIn.push("yellow");
	beep.yellow.play();
	checkMoves();
	}
}
sqr.green.onclick = function(){
	if(inputReady == true){
	playerIn.push("green");
	beep.green.play();
	checkMoves();
	}
}

	





