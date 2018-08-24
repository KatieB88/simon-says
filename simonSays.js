var playBtn = document.querySelector("button");
var sqr1 = document.querySelector(".blue");
var sqr2 = document.querySelector(".red");
var sqr3 = document.querySelector(".yellow");
var sqr4 = document.querySelector(".green");
var msg = document.querySelector(".msg");
var colorCode = [];
var playerIn = [];
var tempA = [];
var tempB = [];
var inputReady = false;
var score = -1;
var x = 0;

//Ever 500 ms, doMove is run inside of flashSequence. 
function flashSequence(){
	score++;
	inputReady = false;
	newColorCode()
	var i = 0;
	var seq = setInterval(function(){
		doMove(colorCode[i]);
		i++;
		if (i >= colorCode.length){
			clearInterval(seq);
		}
	}, 700)
	inputReady = true;
	
	
}

//generates a random number between 1 and 4 and adds it to the colorCode array
function newColorCode(){
	var randNum = Math.floor(Math.random() * 4) + 1;
	colorCode.push(randNum);
	
}


function doMove(tileNum){
	if(tileNum == 1){
		sqr1.classList.add("flash");
	}
	else if(tileNum == 2){
		sqr2.classList.add("flash");
	}
	else if(tileNum == 3){
		sqr3.classList.add("flash");
	}
	else if(tileNum == 4){
		sqr4.classList.add("flash");
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
	for (var i = 0; i < playerIn.length; i++){
		if (colorCode[i] == playerIn[i] && playerIn.length < colorCode.length){
			inputReady = true;
			
			// inputs();
		}
		else if (colorCode[i] == playerIn[i] && playerIn.length == colorCode.length){
			
			inputReady = false;
			
			// flashSequence();
		}
		else if (colorCode[i] != playerIn[i]){
			msg.innerHTML = "<h2>You Lost! Your score is " + score + "</h2>";
			
		}
	}

}


playBtn.addEventListener("click", function(){
	// colorCode = [];
	playerIn = [];
	msg.innerHTML = "<h2>Test</h2>";
	flashSequence();
	inputs();
	
});


//this is adding the Event listener EVERY TIME it is clicked, so every time it is clicked
//it adds another, and so it will execute the code inside it multiple times

function inputs(){
	sqr1.onclick = function(){
		if(inputReady == true){
			playerIn.push(1);
		console.log(playerIn);
		checkMoves();
		}
	}
	sqr2.onclick = function(){
		if(inputReady == true){
			playerIn.push(2);
		console.log(playerIn);
		checkMoves();
		}
	}
	sqr3.onclick = function(){
		if(inputReady == true){
			playerIn.push(3);
		console.log(playerIn);
		checkMoves();
		}
	}
	sqr4.onclick = function(){
		if(inputReady == true){
			playerIn.push(4);
		console.log(playerIn);
		checkMoves();
		}
	}
}
	

	//  function func2(){
	// 	playerIn.push(2);
	// 	console.log(playerIn);
	// 	checkMoves();

	// }

	// function func3(){
	// 	playerIn.push(3);
	// 	console.log(playerIn);
	// 	checkMoves();
	// }

	// function func4(){
	// 	playerIn.push(4);
	// 	console.log(playerIn);
	// 	checkMoves();
	// }	








