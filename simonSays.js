var playBtn = document.querySelector("button");
var sqr1 = document.querySelector(".blue");
var sqr2 = document.querySelector(".red");
var sqr3 = document.querySelector(".yellow");
var sqr4 = document.querySelector(".green");
var colorCode = [];
var playerIn = [];



//generates a random number between 1 and 4 and adds it to the colorCode array
function newColorCode(){
	var randNum = Math.floor(Math.random() * 4) + 1;
	colorCode.push(randNum);
	console.log(colorCode);
}


function flashSequence(){
	newColorCode()
	var i = 0;
	var seq = setInterval(function(){
		doMove(colorCode[i]);
		i++;
		if (i > colorCode.length){
			clearInterval(seq);
		}
	}, 500)

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



playBtn.addEventListener("click", function(){
	colorCode = [];
	flashSequence();
});