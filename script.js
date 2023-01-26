const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const numDisplay = document.getElementById("diceNum")
const scoreDisplay = document.getElementById("score")

let score = 0;


rollBtn.addEventListener("click", () => {
    let diceNum = Math.floor(Math.random() * 6) +1;
    numDisplay.textContent = diceNum

    if(diceNum == 1) {
        scoreDisplay.textContent = "You lost!"
        score = 0;
    } else if(score >= 20) {
        scoreDisplay.textContent = `${score}! You won!`
        score = 0;
    
    } else {
    score += diceNum
    scoreDisplay.textContent = `Score: ${score}`
    }
})

resetBtn.addEventListener("click",  () => {
    scoreDisplay.textContent = "Game reset"
    score = 0;
})
