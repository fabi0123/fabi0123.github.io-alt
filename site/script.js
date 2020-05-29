function genPW() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);
    document.getElementById("pwBTN").style.visibility = "hidden";
    setTimeout(() => {
        console.clear();
    }, 5000);
    return retVal;

}