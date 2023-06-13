import Ball from "./Ball.js"
import Paddle from "./Paddle.js"

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

let lastTime

//to start game

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
    computerPaddle.update(delta, ball.y)
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

    if (isLose()) handleLose()
    //game over if score is 10
    if (localStorage.getItem("playerScore") == 10 || localStorage.getItem("computerScore") == 10) {
      if (localStorage.getItem("playerScore") == 10) {
        alert("You won!")
      } else {
        alert("You lost!")
      }
      localStorage.setItem("playerScore", 0)
      localStorage.setItem("computerScore", 0)
      playerScoreElem.textContent = 0
      computerScoreElem.textContent = 0
    }
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

function isLose() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    localStorage.setItem("playerScore", playerScoreElem.textContent)
  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    localStorage.setItem("computerScore", computerScoreElem.textContent)
  }
  ball.reset()
  computerPaddle.reset()
}

document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)
