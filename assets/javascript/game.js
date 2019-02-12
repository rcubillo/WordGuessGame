
// Used to record how many times a letter can be pressed
var doubleWord = ['a','b','c','d','e','f','g','h','i',
				  'j','k','l','m','n','o','p','q','r',
				  's','t','u','v','w','x','y','z'];
//Array with the words I want the player to guess.
var wordarray =["zimbabwe","gondwana","soja",];

//Array with the images.
var imagesArray = ["assets/images/bob.jpg", "assets/images/gondwana.jpg", "assets/images/soja.jpg"];

//Holds chosenWord
var chosenWord = "";
//Holds letters in word
var lettersInWord = [];
//Holds number of blanks in word
var blankspaces = 0;
//Holds Blanks and successful guesses
var blanksAndSuccesses =[];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;


//FUNCTIONS
//----------------------------------------
function restargame()
{
	//Chooses word randombly from the wordarray
	chosenWord = wordarray[Math.floor(Math.random() * wordarray.length)];
	//Splits the choosen word into individual letters
	lettersInWord = chosenWord.split('');
	//Get the number of blanks
	blankspaces = lettersInWord.length;
	//===========================================================
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c','d','e','f','g','h','i',
				  'j','k','l','m','n','o','p','q','r',
				  's','t','u','v','w','x','y','z'];
	test=false;
	start();
}

function start()
{
	//Select a random word from my array.
	chosenWord = wordarray[Math.floor(Math.random() * wordarray.length)];
	//.split will separate the selected word into individual letters.
	lettersInWord = chosenWord.split('');
	//Get the number of blanks
	blankspaces = lettersInWord.length;


	//===========================================================
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c','d','e','f','g','h','i',
				  'j','k','l','m','n','o','p','q','r',
				  's','t','u','v','w','x','y','z'];

	//Populate blanks
	for(var i = 0; i< blankspaces; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}

    //Changes HTML
    window.onload = function loadword(){
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = wins;
	document.getElementById("lossCounter").innerHTML = losses;
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;
    }
}

function compareLetters(userKey) {
	// console.log('WORKING!');
	// //If user key exist in choosen word then perform this function
	if (chosenWord.indexOf(userKey) > -1) {
		//Loops depending on the amount of blanks
		for (var i = 0; i < blankspaces; i++) {
			//Fills in right index with user key
			if (lettersInWord[i] === userKey) {
				rightGuessCounter++;
				blanksAndSuccesses[i] = userKey;
				document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(' ');
			}

		}
	}
	//Using .push to send letters to the empty array that will hold them.
	else {
		wrongLetters.push(userKey);
		guessesLeft--;
		document.getElementById("numGuesses").innerHTML = guessesLeft;
		document.getElementById("wrongGuesses").innerHTML = wrongLetters;
	}
}

//Display a picture depending on the word selected. This will give a clue to the player.
function displayImage() {
	//Holds the different pictures

	if (chosenWord === "zimbabwe") {
		//Shows a photo associated with the word
		document.canvas.src = " " + imagesArray[0];
		//Adding a song when player hits the "clue botton"
		var audioElement = document.createElement('audio');
		audioElement.setAttribute("src", "assets/music/zimbabwe.mp3");
		audioElement.load()
		audioElement.addEventListener("canplay", function () {
			audioElement.play();
		}, true);

		document.getElementById("littlemessage").innerHTML = "One good thing about music, when it hits you, you feel no pain.";
	}

	if (chosenWord === "gondwana") {
		//Shows a photo associated with the word
		document.canvas.src = " " + imagesArray[1];
		//Adding a song when player hits the "clue botton"
		var audioElement = document.createElement('audio');
		audioElement.setAttribute("src", "assets/music/gondwana.mp3");
		audioElement.load()
		audioElement.addEventListener("canplay", function () {
			audioElement.play();
		}, true);
		document.getElementById("littlemessage").innerHTML = "Sentimiento Original.";
	}

	if (chosenWord === "soja") {
		//Shows a photo associated with the word
		document.canvas.src = " " + imagesArray[2];
		//Adding a song when player hits the "clue botton"
		var audioElement = document.createElement('audio');
		audioElement.setAttribute("src", "assets/music/restofmylife.mp3");
		audioElement.load()
		audioElement.addEventListener("canplay", function () {
			audioElement.play();
		}, true);
		document.getElementById("littlemessage").innerHTML = "Rest of my life.";
	}

}

function decicion()
{
	// When number blanks if filled with right words then you win
	if(rightGuessCounter === blankspaces)
	{
		//Counts Wins
		wins++;
		//Changes HTML
		document.getElementById("winCounter").innerHTML = wins;
		alert('Congratulations...  Remember, winning is not everything, it is the only thing.');
		restargame();
	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
		//Counts losses
		losses++;
		//Changes HTML
		document.getElementById("lossCounter").innerHTML = losses;
		alert('Losing is part of the game. If you never lose, you are never truly tested, and never forced to grow... Keep trying ');
		restargame();
	}
}


//-------------------------------------------
start();

//This captures the letter that the player types.
document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleWord.length; i++)
	{
		if(letterGuessed === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1);
			compareLetters(letterGuessed);
			decicion();
		}
	}
}

