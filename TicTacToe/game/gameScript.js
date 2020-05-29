var turn;
var ai = true;
var totalGames = localStorage.getItem('totalGames');

if (!totalGames) {
    totalGames = 0;
}

function addGames() {
    localStorage.setItem('totalGames', ++totalGames);

}

var totalPlayer1Wins = localStorage.getItem('totalPlayer1Wins');

if (!totalPlayer1Wins) {
    totalPlayer1Wins = 0;
}

function addPlayer1Wins() {
    localStorage.setItem('totalPlayer1Wins', ++totalPlayer1Wins);

}

var totalPlayer2Wins = localStorage.getItem('totalPlayer2Wins');

if (!totalPlayer2Wins) {
    totalPlayer2Wins = 0;
}

function addPlayer2Wins() {
    localStorage.setItem('totalPlayer2Wins', ++totalPlayer2Wins);

}

var totalDraws = localStorage.getItem('totalDraws');

if (!totalDraws) {
    totalDraws = 0;
}

function addDraws() {
    localStorage.setItem('totalDraws', ++totalDraws);

}


var buttonsMarked = [null, false, false, false, false, false, false, false, false, false];
var player1 = []
var player2 = []
var count = 0;
var p1wins = 0;
var p2wins = 0;
var draws = 0;
var win = false;
var start = false;

document.getElementById("wins1").innerHTML = "Player1: " + p1wins;
document.getElementById("wins2").innerHTML = "Player2: " + p2wins;
document.getElementById("draw").innerHTML = "Draws: " + draws;

function go() {
    document.getElementById("backBtn").style.visibility = "hidden"
    addGames();
    turn;
    buttonsMarked = [null, false, false, false, false, false, false, false, false, false];
    player1 = []
    player2 = []
    count = 0;
    win = false;
    start = false;
    randomPlayer();
    document.getElementById("goBtn").style.visibility = "hidden"
    start = true
    document.getElementById("displayPlayer").innerHTML = "Player " + turn + "'s turn"

}

function randomPlayer() {
    ans1 = 1;
    ans2 = 2;
    var answers = [ans1, ans2]
    var Ergebnis = answers[Math.floor(
        Math.random() * answers.length
    )];
    turn = Ergebnis;
}

function mark(buttonID) {
    if (start) {
        if (!win) {

            if (!buttonsMarked[buttonID]) {
                if (count !== 9) {
                    buttonsMarked[buttonID] = true;
                    if (turn === 1) {
                        player1.push(buttonID)
                        player1.sort()
                    } else {
                        player2.push(buttonID)
                        player2.sort()
                    }
                    document.getElementById("btn" + buttonID).innerHTML = turn;
                    count++
                    if (count > 4) {
                        checkwin()

                    }
                    if (turn === 1) {
                        turn = 2
                    } else {
                        turn = 1
                    }
                    if (!win) {
                        if (count !== 9) {
                            document.getElementById("displayPlayer").innerHTML = "Player " + turn + "'s turn"

                        }
                    }

                }
            } else {
                document.getElementById("info").innerHTML = "Dieses Feld ist schon belegt!"
                setTimeout(() => {
                    document.getElementById("info").innerHTML = ""
                }, 7500);

            }
        }
    }
}


function reset() {
    turn;
    buttonsMarked = [null, false, false, false, false, false, false, false, false, false];
    player1 = []
    player2 = []
    count = 0;
    start = false;
    document.getElementById("btn1").innerHTML = ""
    document.getElementById("btn2").innerHTML = ""
    document.getElementById("btn3").innerHTML = ""
    document.getElementById("btn4").innerHTML = ""
    document.getElementById("btn5").innerHTML = ""
    document.getElementById("btn6").innerHTML = ""
    document.getElementById("btn7").innerHTML = ""
    document.getElementById("btn8").innerHTML = ""
    document.getElementById("btn9").innerHTML = ""
}

function checkwin() {
    if (player1.includes(1)) {
        if (player1.includes(2)) {
            if (player1.includes(3)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player1 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p1wins++
                addPlayer1Wins()
            }
        }
    }
    if (player1.includes(1)) {
        if (player1.includes(5)) {
            if (player1.includes(9)) {
                win = true;
                document.getElementById("displayPlayer").innerHTML = "Player1 wins";
                document.getElementById("goBtn").style.visibility = "visible";
                reset();
                p1wins++;
                addPlayer1Wins();
            }
        }
    }
    if (player1.includes(1)) {
        if (player1.includes(4)) {
            if (player1.includes(7)) {
                win = true;
                document.getElementById("displayPlayer").innerHTML = "Player1 wins";
                document.getElementById("goBtn").style.visibility = "visible";
                reset();
                p1wins++
                addPlayer1Wins()
            }
        }
    }
    if (player1.includes(2)) {
        if (player1.includes(5)) {
            if (player1.includes(8)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player1 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p1wins++
                addPlayer1Wins()
            }
        }
    }
    if (player1.includes(3)) {
        if (player1.includes(6)) {
            if (player1.includes(9)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player1 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p1wins++
                addPlayer1Wins()
            }
        }
    }
    if (player1.includes(3)) {
        if (player1.includes(5)) {
            if (player1.includes(7)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player1 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p1wins++
                addPlayer1Wins()
            }
        }
    }
    if (player1.includes(4)) {
        if (player1.includes(5)) {
            if (player1.includes(6)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player1 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p1wins++
                addPlayer1Wins()
            }
        }
    }
    if (player2.includes(1)) {
        if (player2.includes(2)) {
            if (player2.includes(3)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player2 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p2wins++
                addPlayer2Wins()
            }
        }
    }
    if (player2.includes(1)) {
        if (player2.includes(5)) {
            if (player2.includes(9)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "player2 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p2wins++
                addPlayer2Wins()
            }
        }
    }
    if (player2.includes(1)) {
        if (player2.includes(4)) {
            if (player2.includes(7)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player2 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p2wins++
                addPlayer2Wins()
            }
        }
    }
    if (player2.includes(2)) {
        if (player2.includes(5)) {
            if (player2.includes(8)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player2 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p2wins++
                addPlayer2Wins()
            }
        }
    }
    if (player2.includes(3)) {
        if (player2.includes(6)) {
            if (player2.includes(9)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player2 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p2wins++
                addPlayer2Wins()
            }
        }
    }
    if (player2.includes(3)) {
        if (player2.includes(5)) {
            if (player2.includes(7)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player2 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p2wins++
                addPlayer2Wins()
            }
        }
    }
    if (player2.includes(4)) {
        if (player2.includes(5)) {
            if (player2.includes(6)) {
                win = true
                document.getElementById("displayPlayer").innerHTML = "Player2 wins"
                document.getElementById("goBtn").style.visibility = "visible"
                reset()
                p2wins++
                addPlayer2Wins()
            }
        }
    }
    if (count === 9) {
        if (!win) {
            win = true;
            document.getElementById("displayPlayer").innerHTML = "Nobody wins"
            document.getElementById("goBtn").style.visibility = "visible"
            reset()
            draws++
            addDraws()
        }
    }
}
setInterval(() => {
    document.getElementById("wins1").innerHTML = "Player1: " + p1wins;
    document.getElementById("wins2").innerHTML = "Player2: " + p2wins;
    document.getElementById("draw").innerHTML = "Draws: " + draws;
    if (win) {
        document.getElementById("backBtn").style.visibility = "visible"
    }
}, 250);

function stats() {
    document.getElementById("settingsInfoGames").innerHTML = "Games played: " + totalGames
    document.getElementById("settingsInfoPlayer1").innerHTML = "Player1: " + totalPlayer1Wins + " wins"
    document.getElementById("settingsInfoPlayer2").innerHTML = "Player2: " + totalPlayer2Wins + " wins"
    document.getElementById("settingsInfoDraws").innerHTML = "Draws: " + totalDraws
}

function resetStats() {
    localStorage.setItem("totalGames", 0)
    localStorage.setItem("totalDraws", 0)
    localStorage.setItem("totalPlayer1Wins", 0)
    localStorage.setItem("totalPlayer2Wins", 0)
}


function setAi() {
    ai = !ai
}