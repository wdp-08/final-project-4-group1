let startButton = document.getElementById("start-button");
let saveButton = document.getElementById("save-button");
let playerName = document.getElementById("player-name");

startButton.addEventListener("click", function(){
    window.location.href = "game.html"
    localStorage.setItem("playerScore", 0)
    localStorage.setItem("computerScore", 0)
});

saveButton.addEventListener("click", function(){
    const name = playerName.value;
    localStorage.setItem("playerName", name);
    alert("Nama anda sudah tersimpan!");
});

    