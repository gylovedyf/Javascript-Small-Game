//Get DOM Element
var leftInput = document.getElementById("left-input");
var rightInput = document.getElementById("right-input");
var sRight = document.getElementById("shift-to-right");
var pause = document.getElementById("pause");
var sLeft = document.getElementById("shift-to-left");

// Declare setInterval ID
var IntervalId;


//Add onclick function to button
sRight.onclick = function () {
    //Clear all interval
    stop();
    //function execute every 1s
     IntervalId = setInterval(shiftOneRight, 700);
};
sLeft.onclick = function () {
    //Clear all interval
    stop();
    //function execute every 1s
     IntervalId = setInterval(shiftOneLeft, 700);
};

pause.addEventListener("click", stop);

//function that clear interval execution
function stop() {
    clearInterval( IntervalId);
}

//Shift one char from left to right
function shiftOneRight() {
    var leftContent = leftInput.value;
    var ch = leftContent.charAt(0);
    var res = leftContent.slice(1);
    leftInput.value = res;
    rightInput.value = rightInput.value + ch;
}

//Shift one char from right to left
function shiftOneLeft() {
    var rightContent = rightInput.value;
    var len = rightContent.length;
    var ch = rightContent.charAt(len - 1);
    var res = rightContent.slice(0, len - 1);
    rightInput.value = res;
    leftInput.value = ch + leftInput.value;
}
