document.getElementById('add').addEventListener('click', addResult);
document.getElementById('sub').addEventListener('click', subResult);

var inputEl = document.querySelector('input');
var results = document.querySelector('h1');
var currentTotal = 0;

function changeColor() {
    if (currentTotal < 0) {
        results.style.color = "red";
    } else if (currentTotal >= 0) {
        results.style.color = "black";
    }
}

function addResult() {
    var inputValue = parseInt(inputEl.value);
    currentTotal += inputValue;
    changeColor();
    results.textContent = currentTotal;
}

function subResult() {
     var inputValue = parseInt(inputEl.value);
     currentTotal -= inputValue;
     changeColor();
     results.textContent = currentTotal;
}