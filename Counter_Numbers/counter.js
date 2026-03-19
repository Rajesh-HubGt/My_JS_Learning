let counterElement = document.getElementById("counterValue");
function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updateCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updateCounterValue;
    if (updateCounterValue > 0) {
        counterElement.style.color = "Green"
    }   
    else if (updateCounterValue < 0) {
        counterElement.style.color = "Red"
    }   
    else {
        counterElement.style.color = "Black"
    }
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updateCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updateCounterValue;
    if (updateCounterValue > 0) {
        counterElement.style.color = "Green"
    } 
    else if (updateCounterValue < 0) {
        counterElement.style.color = "Red"
    } 
    else {
        counterElement.style.color = "Black"
    }
}

function onReset() {
    let updateCounterValue = 0;
    counterElement.textContent = updateCounterValue;
    counterElement.style.color = "Black";
}