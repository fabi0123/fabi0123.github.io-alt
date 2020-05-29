//check cmd
function checkCmd() {
    if (runTimer === 1) {
        var command = document.getElementById("cmds").value;
        if (command === "lösung") {
            document.getElementById("cmdDisplay").innerHTML = loesung
        } else if (command === "addTimer") {

        }
    }
}