let aboutButtonElement = document.getElementById("aboutButton");
let timeToVisitButtonElement = document.getElementById("timeToVisitButton");
let attractionsButtonElement = document.getElementById("attractionsButton");

let aboutTabElement = document.getElementById("aboutTab");
let timeToVisitTabElements = document.getElementById("timeToVisitTab");
let attractionsTabElement = document.getElementById("attractionsTab");

function aboutButton() {
    aboutTabElement.classList.remove("d-none");
    timeToVisitTabElements.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");

    aboutButtonElement.classList.add("selected-button");
    timeToVisitButtonElement.classList.remove("selected-button");
    attractionsButtonElement.classList.remove("selected-button");
}

function timeToVisitButton() {
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElements.classList.remove("d-none");
    attractionsTabElement.classList.add("d-none");

    aboutButtonElement.classList.remove("selected-button");
    timeToVisitButtonElement.classList.add("selected-button");
    attractionsButtonElement.classList.remove("selected-button");
}

function attractionsButton() {
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElements.classList.add("d-none");
    attractionsTabElement.classList.remove("d-none");

    aboutButtonElement.classList.remove("selected-button");
    timeToVisitButtonElement.classList.remove("selected-button");
    attractionsButtonElement.classList.add("selected-button");
}