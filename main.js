var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var yourMoveDispaly = document.querySelector(".your-move-display");
var btnMove = document.querySelectorAll(".btn-move");
var compMoveDisplay1 = document.querySelector(".comp-move-display")
var compMove = null;
var yourMoveNum = null;
var yourScoreDisplay = document.querySelector(".your-score");
var compScoreDisplay = document.querySelector(".comp-score");
var compScoreNum = 0;
var yourScoreNum = 0;
var bestOf5 = document.querySelector(".best-of-5");
var sumOfScrores = null;
var msgDisplay = document.querySelector(".msg-display");

sumOfScrores = yourScoreNum + compScoreNum;
if(sumOfScrores == 5){
	alert("hi");
}


rock.addEventListener("click" , function(){
	yourMoveDispaly.textContent = "Rock";
	compMoveDisplay();
	yourMoveNum = 0;
	checkForWin();
	endGame();
});

paper.addEventListener("click" , function(){
	yourMoveDispaly.textContent = "Paper";
	compMoveDisplay();
	yourMoveNum = 1;
	checkForWin();
	endGame();
});

scissors.addEventListener("click" , function(){
	yourMoveDispaly.textContent = "Scissors";
	compMoveDisplay();
	yourMoveNum = 2;
	checkForWin();
	endGame();
});

function compMoveDisplay(){
	var randomMoveNumber = randomMove();
	if(randomMoveNumber == 0){
		compMove = 0;
		compMoveDisplay1.textContent = "Rock";
	}
	if(randomMoveNumber == 1){
		compMove = 1;
		compMoveDisplay1.textContent = "Paper";
	}
	if(randomMoveNumber == 2){
		compMove = 2;
		compMoveDisplay1.textContent = "Scissors";
	}
};

function checkForWin(){
	if(compMove == yourMoveNum){
		msgDisplay.textContent = "Tied!";
	}

	if(yourMoveNum == 0 && compMove == 1){
		compScoreNum = compScoreNum + 1;
		compScoreDisplay.textContent = compScoreNum;
		msgDisplay.textContent = "You Lose :(";
	}

	if(yourMoveNum == 1 && compMove == 0){
		yourScoreNum = yourScoreNum + 1;
		yourScoreDisplay.textContent = yourScoreNum;
		msgDisplay.textContent = "You Win!";
	}

	if(yourMoveNum == 1 && compMove == 2){
		compScoreNum = compScoreNum + 1;
		compScoreDisplay.textContent = compScoreNum;
		msgDisplay.textContent = "You Lose :(";
	}

	if(yourMoveNum == 2 && compMove == 1){
		yourScoreNum = yourScoreNum + 1;
		yourScoreDisplay.textContent = yourScoreNum;
		msgDisplay.textContent = "You Win!";
	}

	if(yourMoveNum == 2 && compMove == 0){
		compScoreNum = compScoreNum + 1;
		compScoreDisplay.textContent = compScoreNum;
		msgDisplay.textContent = "You Lose :(";
	}

	if(yourMoveNum == 0 && compMove == 2){
		yourScoreNum = yourScoreNum + 1;
		yourScoreDisplay.textContent = yourScoreNum;
		msgDisplay.textContent = "You Win!";
	}
}

function randomMove(){
	var randomMove = Math.floor(Math.random() *3 );
	return randomMove;
};

function endGame(){
	sumOfScrores = yourScoreNum + compScoreNum;
	if(sumOfScrores == 3){
		rock.disabled = true;
		paper.disabled = true;
		scissors.disabled = true;
		if(yourScoreNum > compScoreNum){
			msgDisplay.textContent = "Victory!!!________Start New Game";
		}
	
		if(yourScoreNum < compScoreNum){
			msgDisplay.textContent = "Defeat :(_________Start New Game";
		}
	}
};

