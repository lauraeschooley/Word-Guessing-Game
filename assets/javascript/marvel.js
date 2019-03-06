//var name = prompt("What's your name?");
//alert("Hello " + name); 
window.onload = start;
var answers = ["wolverine", "deadpool", "hulk", "thor", "daredevil", "spider-man", "captain america", "iron man", "black widow", "hawkeye", "star lord", "gamora", "groot", "rocket", "drax"];
var guessed = [];
var lives = 10;
var wins = 0;
var losses = 0;
var randWord="";
var randNum;
var wordDisplayed="";

function wordSelect () {
	randNum=Math.floor(Math.random() * 15);
	randWord=answers[randNum];
}

function displayWord () {
	for (var i=0; i < randWord.length; i++) {
		wordDisplayed += "-";
	}	
	document.getElementById("word").innerHTML=wordDisplayed;
}

function guessing () {
	if (guessed.indexOf(event.key) > -1) {
			
	}
	else if (randWord.toLowerCase().indexOf(event.key) > -1) {
		for (var j = 0; j < randWord.length; j++) {
			if(event.key===randWord.toLowerCase().charAt(j)) {
				wordDisplayed = wordDisplayed.substr(0,j) + randWord.charAt(j) + wordDisplayed.substr(j + 1); 
				document.getElementById("word").innerHTML=wordDisplayed;
			}
		}
	}
	else {
		guessed.push(event.key);
		lives -= 1;
		document.getElementById("guessedLetter").innerHTML=guessed; 
	}
}

function playerWins () {
	if (randWord===wordDisplayed) {
		document.getElementById("marvelPic").src="assets/images/" + randNum + ".jpg";
		document.getElementById("title").innerHTML="You Win!";
		wins += 1;
		document.getElementById("numberOfWins").innerHTML=wins;
		winner();
		winButton();
	}
}

function playerLoses () {
	if (lives===0) {
		document.getElementById("marvelPic").src="assets/images/" + randNum + ".jpg";
		document.getElementById("title").innerHTML="You Lose!";
		losses += 1;
		winner();
		winButton();
		document.getElementById("numberOfLoses").innerHTML=losses;
	}
}

function start () {
	wordDisplayed="";
	wordSelect();
	displayWord();
	lives= 10;
	guessed=[];
	document.getElementById("guessedLetter").innerHTML=guessed;
	document.getElementById("marvelPic").src="assets/images/marvel.jpg";
	document.getElementById("marvelPic").src="assets/images/" + randNum + ".jpg";
	document.getElementById("numberOfLives").innerHTML=lives;
	document.getElementById("title").innerHTML="Marvel Hero Guesing Game";
	document.getElementById("playAgain").style.display="none";
	document.getElementById("content").style.display="initial";
	document.getElementById("instructions").style.display="initial";
}

document.onkeyup=function() {
	hideInstruction();
	guessing();
	playerWins();
	playerLoses();
	document.getElementById("numberOfLives").innerHTML=lives;
};
function winner () {
	document.getElementById("content").style.display="none";
}
function winButton () {
	document.getElementById("playAgain").style.display="block";
}
function hideInstruction () {
	document.getElementById("instructions").style.display="none";
}


