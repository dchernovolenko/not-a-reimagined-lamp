var canvas = document.getElementById("thing");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
var ctx = canvas.getContext("2d");
var t = 0;
var guessX = 0;
var guessY = 0;

var drawrect = function(x, y){
    ctx.fillRect(x, y, 20, 20);
}

var drawcirc = function(x,y){
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2* Math.PI);
    ctx.stroke()
    ctx.fill();
}

var draw = function(){
    storeGuess(event);
    if( t == 0) {
        drawcirc(guessX, guessY);
    }
    else{
        drawrect(guessX, guessY);
    }
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
}

var togglefunc = function(){
    if( t ==0){
        t = 1;
    }
    else {
        t= 0;
    }
}

clear.addEventListener("click", clearcan);
toggle.addEventListener("click", togglefunc);
canvas.addEventListener("click", draw);