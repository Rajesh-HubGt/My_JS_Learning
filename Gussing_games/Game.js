let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function chechGuess() {
    let guessdNumber = parseInt(userInput.value);
    if (guessdNumber > randomNumber) {
        gameResult.textContent = " Too High, Try Again";
        gameResult.style.backgroundColor = " #1e217c"
    } else if (guessdNumber < randomNumber) {
        gameResult.textContent = " Too Low, Try Again";
        gameResult.style.backgroundColor = " #1e217c"
    } else if (guessdNumber === randomNumber) {
        gameResult.textContent = "Congratulations! , you Got it Right";
        gameResult.style.backgroundColor = " green"
    } else {
        gameResult.textContent = " Plese Provied a Valid Input";
        gameResult.style.backgroundColor = " red"
    }
}