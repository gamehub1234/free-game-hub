function playGame(url) {
    document.querySelector(".games").style.display = "none";
    document.getElementById("player").style.display = "block";
    document.getElementById("gameFrame").src = url;
}

function closeGame() {
    document.getElementById("player").style.display = "none";
    document.querySelector(".games").style.display = "grid";
    document.getElementById("gameFrame").src = "";
}