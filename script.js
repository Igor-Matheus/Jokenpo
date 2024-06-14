const result = document.querySelector(".result")
const yourScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const reset = document.querySelector(".reset")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log(`Humano: ${human} Máquina: ${machine}`)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === 'paper' && machine === 'rock') || (human === 'rock' && machine === 'scissors') || (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Máquina!"
    }
}

const restartScore = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0
    yourScore.innerHTML = 0
    machineScore.innerHTML = 0
}

