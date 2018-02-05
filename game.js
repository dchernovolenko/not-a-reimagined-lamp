var canvas = document.getElementById("thing");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
var ctx = canvas.getContext("2d");
var t = 0;
var guessX = 0;
var guessY = 0;
var oldX = 0;
var oldY = 0;
ctx.beginPath();


var drawcirc = function(x,y){
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2* Math.PI);
    ctx.fill();
    if(t==0){
        ctx.moveTo(x,y)
    }
    else{
        ctx.moveTo(oldX, oldY)
        ctx.lineTo(x,y)
    }
    ctx.stroke();
    t += 1;
    oldX = x;
    oldY = y;
}

var draw = function(){
    storeGuess(event);
    drawcirc(guessX, guessY);
}

function storeGuess(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    guessX = x;
    guessY = y;
    console.log("x coords: " + guessX + ", y coords: " + guessY);
}

var clearcan = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}


clear.addEventListener("click", clearcan);
canvas.addEventListener("click", draw);