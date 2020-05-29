var canvas = document.getElementById("gameScreen");
var context = canvas.getContext("2d");
//Start
var toWin = 10;
var play = true;
//debug
var bugTest = 0;
var toDebug = 0;
var debug = false;
var debugP = 0;
var debugEnd = true;
var press;
var l = 0;
var r = 0;
//cmd
var prefix = "/";
//canvas
var cnvsHeight = canvas.height;
// Ball
var x = canvas.width / 2;
var y = canvas.height / 2;
var ballRadius = 10;
var startX = 3;
var startY = -3;
var speedX = startX;
var speedY = startY;
//Paddle
var paddleWidth = 15;
var paddleHeight = 60;
var changeY = 5;
var maxY = 315;
//Paddle 1
var paddle1X = 10;
var paddle1Y = 130;
//Paddle 2
var paddle2X = canvas.width - paddleWidth - 10;
var paddle2Y = 130;
//Pressed
var upPressed = false;
var downPressed = false;
var wPressed = false;
var sPressed = false;
//Score
var score1 = 0;
var score2 = 0;
//TODO: ai
//FIXME: 

//Draw
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddel1();
    drawPaddel2();
    drawScore();
    if (x + speedX > canvas.width - ballRadius || x + speedX < ballRadius) {
        speedX = -speedX;
    }
    if (y + speedY < ballRadius || y + ballRadius > canvas.height) {
        speedY = -speedY;
    }
    // if (y < paddle1Y + (paddleHeight / 2) && y > paddle1Y - (paddleHeight / 2) && x < paddleWidth) {
    //     // speedX = -speedX;
    //     speedY = -speedY;
    //     console.warn("YEAH");
    // }
    if (score1 >= toWin || score2 >= toWin) {
        if (!debug) {
            clearInterval(interval);
        }
    }
    if (bugTest >= toDebug) {
        if (debug) {
            if (debugEnd) {
                debug = false;
                play = true;
                document.getElementById("dbDis").innerHTML = "100% left debugging mode";
                document.getElementById("dbDis").style.color = "red";
            }
        }
    }
    if (y > paddle2Y && y < paddle2Y + paddleHeight && x > canvas.width - ballRadius - paddleWidth) {
        speedX = -speedX;
        // console.warn("r");
        r++;
    } else if (y > paddle1Y && y < paddle1Y + paddleHeight && x < ballRadius + paddleWidth) {
        speedX = -speedX;
        // console.warn("l");
        l++;
    } else if (x + speedX > canvas.width - paddleWidth || x + speedX < ballRadius - paddleWidth) {
        startPoint();
        if (!play) {
            speedX = -speedX;
            bugTest++;
            console.log(bugTest);
        }
        score1++;
    } else if (x - speedX < ballRadius) {
        startPoint();
        if (!play) {
            speedX = -speedX;
            bugTest++;
            console.log(bugTest);
        }
        score2++;
    }
    x += speedX;
    y += speedY;
    if (wPressed) {
        if (paddle1Y + changeY > canvas.height - canvas.height + changeY) {
            paddle1Y -= changeY;
        }
    } else if (sPressed) {
        if (paddle1Y + changeY < canvas.height - paddleHeight) {
            paddle1Y += changeY;
        }
    }
    if (upPressed) {
        if (paddle2Y + changeY > canvas.height - canvas.height + changeY) {
            paddle2Y -= changeY;
        }
    } else if (downPressed) {
        if (paddle2Y + changeY < canvas.height - paddleHeight) {
            paddle2Y += changeY;
        }
    }
}

function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "lightgreen";
    context.fill();
    context.closePath();
}

function drawPaddel1() {
    context.beginPath();
    context.rect(paddle1X, paddle1Y, paddleWidth, paddleHeight);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
}

function drawPaddel2() {
    context.beginPath();
    context.rect(paddle2X, paddle2Y, paddleWidth, paddleHeight);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
}

function drawScore() {
    drawScore1();
    drawScore2();
}

function drawScore1() {
    context.font = "16px Arial";
    context.fillStyle = "orange";
    context.fillText("Score: " + score1, 8, 20);
}

function drawScore2() {
    context.font = "16px Arial";
    context.fillStyle = "orange";
    context.fillText("Score: " + score2, canvas.width - 90, 20);
}

function startPoint() {
    x = (canvas.width / 2) + -(Math.random() * 3);
    y = (canvas.height / 2) + (Math.random() * 3);
    if (speedY > 0) {
        if (speedX < startX + 3) {
            speedY += 0.5;
            speedX += 0.5;
        }
        speedY = -speedY;
    } else {
        if (speedX > startX - 3) {
            speedY -= 0.5;
            speedX -= 0.5;
        }
    }

}

//Listener
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if (play) {
        if (e.key == "UP" || e.key == "ArrowUp") {
            upPressed = true;
        } else if (e.key == "Down" || e.key == "ArrowDown") {
            downPressed = true;
        } else if (e.keyCode == 87) {
            wPressed = true;
        } else if (e.keyCode == 83) {
            sPressed = true;
        }
    }
}

function keyUpHandler(e) {
    if (play) {
        if (e.key == "UP" || e.key == "ArrowUp") {
            upPressed = false;
        } else if (e.key == "Down" || e.key == "ArrowDown") {
            downPressed = false;
        } else if (e.keyCode == 87) {
            wPressed = false;
        } else if (e.keyCode == 83) {
            sPressed = false;
        }
    }
}


//Debug
function startDebug() {
    setInterval(move, 500);
    setInterval(deBugDis, 250);
    debugP = 100 / toDebug;
    score1 = 0;
    score2 = 0;
    bugTest = 0;
}

function move() {
    if (!play) {
        ans1 = "w";
        ans2 = "s";
        ans3 = "Down";
        ans4 = "Up";
        var answers = [ans1, ans2, ans3, ans4];
        press = answers[Math.floor(Math.random() * answers.length)];
        if (press === "w") {
            wPressed = !wPressed;
        } else
        if (press === "s") {
            sPressed = !sPressed;
        } else if (press === "Down") {
            downPressed = !downPressed;
        } else if (press === "Up") {
            upPressed = !upPressed;
        }
    }
}

function deBugDis() {
    if (!play) {
        document.getElementById("dbDis").innerHTML = "Debugging: " + (bugTest * debugP).toFixed(2) + "% / " + toDebug;
    }
}

//cmd
function cmd() {
    var args = document.getElementById("cmdI").value.slice(prefix.length).split(/ +/);
    var command = args.shift().toLowerCase();

    if (command === "debug") {
        if (toDebug > 0) {
            play = false;
            debug = true;
            startDebug();
            if (args === "false") {
                debugEnd = false;
            }
        } else {
            document.getElementById("cmdDis").innerHTML = "diese Zahl ist zu klein";
        }
    } else if (command === "setdebug") {
        toDebug = parseInt(args);
        document.getElementById("cmdDis").innerHTML = "ToDebug set to: " + toDebug;
        setTimeout(hide, 5000);
    } else if (command === "stopdebug") {
        play = true;
        debug = false;
    }
    document.getElementById("cmdI").value = "";
}

function hide() {
    document.getElementById("cmdDis").innerHTML = "";
}

function start() {
    var interval = setInterval(draw, 10);
    document.getElementById("startBtn").style.visibility = "hidden";
}