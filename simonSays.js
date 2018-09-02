var beep1 = new Audio ('beep1.wav');
var beep2 = new Audio ('beep2.wav');
var beep3 = new Audio ('beep3.wav');
var beep4 = new Audio ('beep4.wav');
var playBtn = document.querySelector("button");
var sqr1 = document.querySelector(".blue");
var sqr2 = document.querySelector(".red");
var sqr3 = document.querySelector(".yellow");
var sqr4 = document.querySelector(".green");
var msg = document.querySelector(".msg");
var colorCode = [];
var playerIn = [];
var inputReady = false;
var score = -1;
var j = 0;

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
	var randNum = Math.floor(Math.random() * 4) + 1;
	colorCode.push(randNum);
	
}

//checks the number created by newColorCode and adds the class "flash" and plays the corresponding beep noise. Removes class after 500 ms.
function doMove(tileNum){
	
	if(tileNum == 1){
		sqr1.classList.add("flash");
		beep1.play();
	}
	else if(tileNum == 2){
		sqr2.classList.add("flash");
		beep2.play();
	}
	else if(tileNum == 3){
		sqr3.classList.add("flash");
		beep3.play();
	}
	else if(tileNum == 4){
		sqr4.classList.add("flash");
		beep4.play();
	}
	setTimeout(function(){
		if(tileNum == 1){
			sqr1.classList.remove("flash");
		}
		else if(tileNum == 2){
			sqr2.classList.remove("flash");
		}
		else if(tileNum == 3){
			sqr3.classList.remove("flash");
		}
		else if(tileNum == 4){
			sqr4.classList.remove("flash");
		}
		
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
sqr1.onclick = function(){
	if(inputReady == true){	
	playerIn.push(1);
	beep1.play();
	checkMoves();
	}
}
sqr2.onclick = function(){
	if(inputReady == true){	
	playerIn.push(2);
	beep2.play();
	checkMoves();
	}
}
sqr3.onclick = function(){
	if(inputReady == true){
	playerIn.push(3);
	beep3.play();
	checkMoves();
	}
}
sqr4.onclick = function(){
	if(inputReady == true){
	playerIn.push(4);
	beep4.play();
	checkMoves();
	}
}

	





