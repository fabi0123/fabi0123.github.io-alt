// var min = prompt("Minimum");
// var max = prompt("Maximum");
// var timerMin = prompt("Minuten");
// var timerSec = prompt("Sekunden")
// var points;
var min = 1
var max = 500
var timerMin = "1"
var timerSec = "00"
var zeichen = "+";
var points;


//start

setInterval(() => {
    document.getElementById("zahlen").innerHTML = "Min: " + min + " max: " + max
}, 1000);

function start() {
    var startDiv = document.getElementById("start");
    startDiv.style.visibility = "hidden"

    setTimeout(() => {
        startTimer();
        startGame();
        runTimer = 1
            //auto();
        points = 0;

        setInterval(() => {
            if (timerTotal / 2 === timerCountSec) {
                document.getElementById("hupenSound").play()
                setTimeout(() => {
                    document.getElementById("hupenSound").pause()
                }, 5000);
            }
        }, 1000);
    }, 3000);
}



//aufgaben
let userInput;
let aufgabe1;
let aufgabe2;
let loesung;

function startGame() {
    genAufgabe();
}

function genAufgabe() {

    (Math.random() * (max - min)) + min;
    aufgabe1 = Math.round((Math.random() * (max - min)) + min);
    aufgabe2 = Math.round((Math.random() * (max - min)) + min);
    loesung = aufgabe1 + aufgabe2
    document.getElementById("aufgabenFeld").innerHTML = "Aufgabe: " + aufgabe1 + "+" + aufgabe2
}

function checkAnswer() {
    if (runTimer === 1) {
        userInput = parseInt(document.getElementById("eingabeInp").value);

        if (userInput === loesung) {
            genAufgabe();
            document.getElementById("eingabeInp").value = "";
            points++;
            document.getElementById("points").innerHTML = points + " points"
        }
    } else {
        document.getElementById("infoP").innerHTML = "Die Zeit ist schon vorbei"
        document.getElementById("infoP").style.color = "red"
        setTimeout(() => {
            document.getElementById("infoP").innerHTML = ""
        }, 5000);
    }
}









// var aufgabenArray =[""]
// let numbers = Math.round(Math.random() * 5 + 2)
// while (numbers > 0) {
//     numbers--
//     console.log(numbers);
//     aufgabenArray.push(Math.round(Math.random() * 10000))
// }
// var endAufgabe;
// let i = aufgabenArray.length + 1;
// while (i > 0) {
//     endAufgabe = endAufgabe + aufgabenArray[0]
//     aufgabenArray.pop(0)
//     i--
// }