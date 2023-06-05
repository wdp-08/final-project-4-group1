

//to start game
let startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    let name = document.getElementById("player-name").value;
    localStorage.setItem("playerName", name);
    window.location.href = "game.html";
});

