let fistNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let resultElement = document.getElementById("gameResult");

function checkButton() {
    let fistRandumNumber = parseInt(fistNumberElement.textContent);
    let secondRandumNumber = parseInt(secondNumberElement.textContent);
    let inputValue = parseInt(userInput.value);

    let sumOffNumbers = fistRandumNumber + secondRandumNumber;

    if (inputValue === sumOffNumbers) {
        resultElement.textContent = "Congratulations! You got it right.";
        resultElement.style.backgroundColor = "#028a0f";
    } else {
        resultElement.textContent = "Please Try Again!";
        resultElement.style.backgroundColor = "#1e217c";
    }

}

function restartButton() {
    let fistRandumNumber = Math.ceil(Math.random() * 100);
    fistNumberElement.textContent = fistRandumNumber;
    let secondRandumNumber = Math.ceil(Math.random() * 100);
    secondNumberElement.textContent = secondRandumNumber;

    resultElement.textContent = "";
    userInput.value = "";

}
restartButton();