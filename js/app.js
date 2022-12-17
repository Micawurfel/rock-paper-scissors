const piedra = document.getElementById("piedra")
const papel = document.getElementById("papel")
const tijera = document.getElementById("tijera")

const gamerChoice = document.getElementById("gamer-option")
const computerChoice = document.getElementById("computer-option")
let gamer
let computer

const text = document.getElementById("text")
let texto 

const gamerScore = document.getElementById("gamerScore")
const computerScore = document.getElementById("computerScore")
let gamerCount = 0
let computerCount = 0

// gamer choice
const choices = ["piedra", "papel", "tijera"]

piedra.onclick = () => {
    gamer = choices[0];
    generateComputerChoice();
    gamerChoice.innerHTML = `<i class="fa-solid fa-hand-back-fist"><i>`
    getResult()
}

papel.onclick = () => {
    gamer = choices[1];
    generateComputerChoice();
    gamerChoice.innerHTML = `<i class="fa-solid fa-hand"><i>`
    getResult()
}

tijera.onclick = () => {
    gamer = choices[2];
    generateComputerChoice();
    gamerChoice.innerHTML = `<i class="fa-solid fa-hand-scissors"><i>`
    getResult()
}

// computer choice
function generateComputerChoice() {
    let random = Math.floor(Math.random()* 3)

    if (random === 0) {
        computer = "piedra"
        computerChoice.innerHTML = `<i class="fa-solid fa-hand-back-fist"><i>`
    } else if (random === 1) {
        computer = "papel"
        computerChoice.innerHTML = `<i class="fa-solid fa-hand"><i>`
    } else if (random === 2) {
        computer = "tijera"
        computerChoice.innerHTML = `<i class="fa-solid fa-hand-scissors"><i>`
    }
} 


// get results
function getResult(){

    switch (gamer + computer) {
        case "piedrapiedra":
        case "papelpapel":
        case "tijeratijera":
            texto = "its a draw"
            break;
        case "piedratijera":
        case "papelpiedra":
        case "tijerapapel":
            texto = `${gamer} beats ${computer}, you win!!`
            gamerCount ++;
            gamerScore.textContent = gamerCount
            break;
        case "piedrapapel":
        case "papeltijera":
        case "tijerapiedra":
            texto = `${computer} beats ${gamer}, you lost!!`
            computerScore.textContent = computerCount
            computerCount ++;
            break;
    }

    text.textContent = texto
}

// reset game 
let startNewGame = document.querySelector("#reset")

startNewGame.onclick = ()=>{
    computerCount = 0;
    gamerCount = 0; 
    console.log ("new game")
}

function restartGame(){
    if (computerCount === 4){
        alert ("you lost the game, start new game")
        computerCount = 0;
        gamerCount = 0;
    // }else if (gamerCount === 3) {
    //     alert ("you won the game, start new game")
    //     computerCount = 0;
    //     gamerCount = 0;
    } 
};




