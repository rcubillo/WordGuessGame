// Declaring variables
var wins = 0;
var lives = 15;
var losses = 0;
var string;
var answerArray;


// to store the letters that we already guessed
var guessedletters = [];
var correctwords = [];
var wrongword = [];

//array wiht a list of words
var words = [
    "javascript",
    "hello",
    "hangman",
    "computer",
    "chino"
];

//Selecting a random word from my array "word"
var choosenwords = words[Math.floor(Math.random() * words.length)];
console.log(choosenwords);



//this function will change the letter to underscore depending of the lenght of the word.
function starting() {
    for (var i = 0; i < choosenwords.length; i++) {
        guessedletters.push(' _ ');
    }
    return guessedletters;
};
console.log(starting());


// typing a letter and capturing into  a var (userskey).
document.onkeyup = function(event){
    var userskey = event.key;

    // Loop so that when user types a letter it will clasify if the letter is from the choosen word it will
    // get store in an array, if not it will be assign into another array.
    if(choosenwords.indexOf(userskey) > -1){
        correctwords.push(userskey);
        console.log(correctwords);
    } else {
        wrongword.push(userskey)
        console.log(wrongword);
    }
}








