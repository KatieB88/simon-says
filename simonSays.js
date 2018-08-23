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

//Ever 500 ms, doMove is run inside of flashSequence. 
function flashSequence(){
	newColorCode()
	var i = 0;
	var seq = setInterval(function(){
		doMove(colorCode[i]);
		i++;
		if (i >= colorCode.length){
			clearInterval(seq);
		}
	}, 500)
	inputReady = true;
	inputs()
}

//generates a random number between 1 and 4 and adds it to the colorCode array
function newColorCode(){
	var randNum = Math.floor(Math.random() * 4) + 1;
	colorCode.push(randNum);
	console.log(colorCode);
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
		
	}, 300);
	
}



function checkMoves(){
	for (var i = 0; i < playerIn.length; i++){
		if (colorCode[i] == playerIn[i]){
			// playerIn = [];
			inputReady = true;
			inputs();
		}
		else {
			msg.innerHTML = "<h2>You Lost!</h2>";
			
		}
	}
}


playBtn.addEventListener("click", function(){
	// colorCode = [];
	// playerIn = [];
	flashSequence();
	
	
});

function inputs(){
	
if(inputReady == true){
	sqr1.addEventListener("click", function(){
		// tempA.push(1);
		// tempB = tempA.slice(tempA.length - 1);
		// Array.prototype.push.apply(playerIn, tempB);
		// playerIn = playerIn.concat(tempA);
		// tempA = [];
		playerIn.push(1);
		inputReady = false;
		checkMoves();
	});

	sqr2.addEventListener("click", function(){
		// tempA.push(2);
		// tempB = tempA.slice(tempA.length - 1);
		// Array.prototype.push.apply(playerIn, tempB);
		// playerIn = playerIn.concat(tempA);
		// tempA = [];
		playerIn.push(2);
		inputReady = false;
		checkMoves();
	});

	sqr3.addEventListener("click", function(){
		// tempA.push(3);
		// tempB = tempA.slice(tempA.length - 1);
		// Array.prototype.push.apply(playerIn, tempB);
		// playerIn = playerIn.concat(tempA);
		// tempA = [];
		playerIn.push(3);
		inputReady = false;
		checkMoves();
	});

	sqr4.addEventListener("click", function(){
		// tempA.push(4);
		// tempB = tempA.slice(tempA.length - 1);
		// Array.prototype.push.apply(playerIn, tempB);
		// playerIn = playerIn.concat(tempA);
		// tempA = [];
		playerIn.push(4);
		inputReady = false;
		checkMoves();
	});	

	}
	

}






