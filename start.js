let startButton = document.getElementById("start-button");
let saveButton = document.getElementById("save-button");
let playerName = document.getElementById("player-name");

startButton.addEventListener("click", function(){
    window.location.href = "game.html";
});

saveButton.addEventListener("click", function(){
    localStorage.setItem("playerName", playerName.value);
    alert("Nama anda sudah tersimpan!");
});

    