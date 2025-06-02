let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
// console.log(randomNumber)

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too high try again!";
        gameResult.style.background = "blue";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too low try again!";
        gameResult.style.background = "blue";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "congratulations,you got it!!";
        gameResult.style.background = "green";

    }
}
