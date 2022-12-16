window.addEventListener('load', function() {
    console.log('La página ha terminado de cargarse!!');
});

let piedra = document.getElementById("piedra")
let papel = document.getElementById("papel")
let tijera = document.getElementById("tijera")

let gamerOption = document.getElementById("gamer-option")
let computerOption = document.getElementById("computer-option")

let texto = document.getElementById("text")


piedra.onclick = () => {
    gamerOption.classList.add('fa-hand-back-fist')
    gamerOption.classList.remove('fa-hand')
    gamerOption.classList.remove('fa-hand-scissors')
}

papel.onclick = () => {
    gamerOption.classList.add('fa-hand')
    gamerOption.classList.remove('fa-hand-back-fist')
    gamerOption.classList.remove('fa-hand-scissors')
}

tijera.onclick = () => {
    gamerOption.classList.add('fa-hand-scissors')
    gamerOption.classList.remove('fa-hand')
    gamerOption.classList.remove('fa-hand-back-fist')
}

const options = ["piedra", "papel", "tijera"]

let computerOpiton = Math.floor(Math.random()* 3)
console.log(computerOpiton)