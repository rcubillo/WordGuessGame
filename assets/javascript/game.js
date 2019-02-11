// Declaring variables
var wins = 0;
var lives = 15;
var losses = 0;
var string;
var answerArray;
var numBlanks = 0;



// to store the letters that we already guessed
var underscore = [];
var correctwords = [];
var wrongword = [];

//DOM
var wordunderscore =  document.getElementById("word");



//array wiht a list of words
var words = [
    "index",
    "sky",
    "computer",
    "chino"
];

//Selecting a random word from my array "word"
var choosenwords = words[Math.floor(Math.random() * words.length)];
console.log(choosenwords);



//this function will change the letter to underscore depending of the lenght of the word.
function starting() {
    for (var i = 0; i < choosenwords.length; i++) {
        underscore.push(' _ ');
        document.getElementById("guessed").innerHTML= underscore;
    }

    document.getElementById("guessed").innerHTML= underscore.join(' ');
    return underscore;
};


    // typing a letter and capturing into  a var (userskey).
    document.onkeyup = function (event) {
        var userskey = event.key;
        // Loop so that when user types a letter it will clasify if the letter is from the choosen word it will
        // get store in an array, if not it will be assign into another array.
        if (choosenwords.indexOf(userskey) > -1) {
            // adding the correct letters to the "correct array"e
            correctwords.push(userskey);
            // this will replace the undercore with the correct letter.
            underscore[choosenwords.indexOf(userskey)] = userskey;
            if (underscore.join('') == choosenwords) {

                alert("You win");
            }
            console.log(underscore);

            //console.log(correctwords);
        } else {
            //adding the wrong letters to the "wrong array"
            wrongword.push(userskey)
            console.log(wrongword);
        }
    }


//showing the undercore word into the dom
window.onload = function loadword(){
    document.getElementById("word").innerHTML = starting();
    };