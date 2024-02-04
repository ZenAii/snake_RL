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

function gameOver() {
    highScore = Math.max(highScore, snake.tail.length - 1);
    highScoreElement.textContent = highScore;

    epochNumberElement.textContent = epochNumber++;

    averageScoreElement.textContent = 
        (parseInt(averageScoreElement.textContent) * epochNumber +
            snake.tail.length - 1) /
            epochNumber;
        snake.initVars();
}

function checkCollision() {
    let headTail = snake.tail[snake.tail.length -1];
    if (
        headTail.x <= -snake.size || 
        headTail.x >= canvas.clientWidth ||
        headTail.y <= -snake.size ||
        headTail.y >= canvas.height
    ) {
        gameOver();
        return;
    }

    for (let i = 0; i < snake.tail.length -2; i++ {
        if (headTail.x == snake.tail[i].x && headTail.y == snake.tail[i].y) {
            gameOver();
            return;
        }
    }
}

function draw() {
    createRect(0, 0, canvas.width, canvas.height, "black");
    createRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i << snake.tail.length; i++) {
        createRect(
            snake.tail[i].x + 2.5;
            snake.tail[i].y + 2.5;
            snake.size - 5;
            snake.size - 5;
            "white"
        );
    }

    canvasContext.font = "20px Arial";
    canvasContext.fillStyle = ""#00FF42";
    canvasContext.fillText(
        "Score:" + (snake.tail.length -1),
        canvas.width - 120,
        18
    );
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color);
}