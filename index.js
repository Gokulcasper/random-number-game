let randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

function checkGuess(){
let guessedNumber = parseInt(userInput.value);
console.log(guessedNumber);
if(guessedNumber > randomNumber)
{
gameResult.textContent="Too High! Try Again.";
gameResult.style.backgroundColor="red";
}
else if(guessedNumber < randomNumber)
{
    gameResult.textContent="Too Low! Try Again.";
    gameResult.style.backgroundColor="rgb(244, 79, 79)";
}
else if(guessedNumber === randomNumber)
{
    gameResult.textContent="Congratulations! You Guessed Correct Number";
    gameResult.style.backgroundColor="Green";

}
else{
    gameResult.textContent="Please Provide a valid input.";
    gameResult.style.backgroundColor="black";
}
}
