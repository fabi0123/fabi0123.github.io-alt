//title
function change() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("title").style.color = "#" + randomColor;
    var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("title2").style.color = "#" + randomColor2;
}
setInterval(change, 1000);

//Timer
function timerRed() {
    document.getElementById("timerDis").style.color = "red"
    document.getElementById("hupenSound").play()
    setTimeout(() => {
        document.getElementById("hupenSound").pause()
    }, 5000);
}

//Highscore