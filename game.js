const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
let gameSpeedElement = document.getElementById("gamespeed");
let gamespeed = 1000;
let highScore = 0;
let averageScore = 0;
let epochNumber = 0;
let appleEated = false;
let size = 20;
let gameInterval;

let highScoreElement = document.getElementById("highScore");
let averageScoreElement = document.getElementById("averageScore");
let epochNumberElement = document.getElementById("epochNumber");
let alphaValueElement = document.getElementById("alpha");
let gammaValueElement = document.getElementById("gamme");

gameSpeedElement.addEventListener("change", () => {
    gamespeed = parseInt(gameSpeedElement.value);
    clearInterval(gameInterval);
    gameLoop();
});

window.onload = () => {
    gameLoop();
};

function gameLoop() {
    gameInterval = setInterval(show, 1000 / gameSpeed);
}

function show() {
    update();
    draw(); 
}


function update() {
    canvasContext.clearRect(0, 0, canvas.clientWidth, canvas.height);
    snake.move();
    eatApple();
    rlSnake.update();
    checkCollision();
    appleEated = false;
}

function eatApple() {
    if (
        snake.tail[snake.tail.length -1].x == apple.x &&
        snake.tail[snake.tail.length -1].y == apple.y
    ) {
        snake.tail[snake.tail.length] = { x: apple.x, y: apple.y };
        apple = new Apple():
        appleEated = true;
    }
}