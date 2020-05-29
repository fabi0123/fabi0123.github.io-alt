function doAI() {
    if (ai === true) {
        if (turn === 2) {
            if (count === 1) {
                if (!buttonsMarked[5]) {
                    mark(5)
                } else {
                    mark(1)
                }
            }
        }
    }
}
setInterval(doAI, 250);