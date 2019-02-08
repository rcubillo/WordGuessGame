// Declaring variables
var wins = 0;
var lives = 15;
var losses = 0;
var string;
var answerArray;


// to store the letters that we already guessed
var guessedletters = [];

//array wiht a list of words
var words = [
    "javascript",
    "hello",
    "hangman",
    "computer",
    "chino"
];


//Selecting a random word from my array "word"
var choosingwords = words[Math.floor(Math.random() * words.length)];
console.log(choosingwords);



//this function will change the letter to underscore depending of the lenght of the word.
function starting() {
    for (var i = 0; i < choosingwords.length; i++) {
        guessedletters.push(' _ ');
    }
    return guessedletters;
};
console.log(starting());


// typing a letter and capturing it on a var.


document.onkeyup = function(event){
    var userskey = event.key;
    console.log(userskey);
}




