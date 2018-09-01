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

//Ever 500 ms, doMove is run inside of flashSequence. 
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

//generates a random number between 1 and 4 and adds it to the colorCode array
function newColorCode(){
	var randNum = Math.floor(Math.random() * 4) + 1;
	colorCode.push(randNum);
	
}


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


function checkMoves(){
	inputReady = false;
	
		if (colorCode[j] != playerIn[j]){
			msg.innerHTML = "<h2>You Lost! Your score is " + score + "</h2>";
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

function reset(){
	score = -1;
	colorCode = [];
	playerIn = [];
	j = 0;
}

playBtn.addEventListener("click", function(){
	reset();
	msg.innerHTML = "";
	flashSequence();
	
	
});


	sqr1.onclick = function(){
		if(inputReady == true){
		
		playerIn.push(1);
		console.log(playerIn);
		beep1.play();
		checkMoves();
		}
	}
	sqr2.onclick = function(){
		if(inputReady == true){
		
		playerIn.push(2);
		console.log(playerIn);
		beep2.play();
		checkMoves();
		}
	}
	sqr3.onclick = function(){
		if(inputReady == true){
		
		playerIn.push(3);
		beep3.play();
		console.log(playerIn);
		checkMoves();
		}
	}
	sqr4.onclick = function(){
		if(inputReady == true){
		
		playerIn.push(4);
		beep4.play();
		console.log(playerIn);
		checkMoves();
		}
	}

	





