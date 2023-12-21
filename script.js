function clickLeft() {
    document.getElementById("left").style.width = "90%";
    document.getElementById("right").style.width = "10%";
    document.getElementById("cat").style.visibility = "visible";
    document.getElementById("dog").style.visibility = "hidden";
}

function clickCenter() {
    document.getElementById("left").style.width = "50%";
    document.getElementById("right").style.width = "50%";
    document.getElementById("cat").style.visibility = "visible";
    document.getElementById("dog").style.visibility = "visible";
}

function clickRight() {
    document.getElementById("left").style.width = "10%";
    document.getElementById("right").style.width = "90%";
    document.getElementById("cat").style.visibility = "hidden";
    document.getElementById("dog").style.visibility = "visible";
}