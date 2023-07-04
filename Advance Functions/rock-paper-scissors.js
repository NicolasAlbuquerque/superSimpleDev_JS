let score = JSON.parse(localStorage.getItem('score')) || {// pegando o que estava no local storagem como string, e convertendo para object  || colocando um valor default caso não exista nada no localStorage
    wins: 0,
    losses: 0,
    ties: 0,
}
/*
if(!score){
score = {
    wins: 0,
    losses: 0,
    ties: 0,
}
}
*/

updateScoreElement();

let isPlaying =false
let intervalId

// const autoPlay = () => {

// }
const stop = ()=> {
    clearInterval(intervalId)
}





function autoPlay(){

    if(!isPlaying){

        intervalId = setInterval(() => { 
            const playerMove = pickComputerMove()
            playGame(playerMove)
}, 1000)
} else{
        clearInterval(intervalId);
        isPlaying = false
}


    }
    

    document.querySelector('.js-rock-button')
        .addEventListener('click', ()=> {
            playGame('Rock')
    });

    document.querySelector('.js-paper-button')
        .addEventListener('click', ()=>{
            playGame('Paper')
        });

        document.querySelector('.js-scissors-button')
            .addEventListener('click',() => {
                playGame('Scissors')
            })

        document.body.addEventListener('keydown', (event)=>{
                console.log(event.key);
                if(event.key === 'r'){
                    playGame('Rock')
                }
                else if(event.key === 'p'){
                    playGame('Paper')
                }else if(event.key === 's'){
                    playGame('Scissors')
                }
            })

function playGame(playerMove) {
const pcMove = pickComputerMove();
let result = ''

if (playerMove === 'Scissors') {

    if (pcMove === 'Scissors') {
        result = 'You tie'
    } else if (pcMove === 'Paper') {
        result = 'You win'
    } else if (pcMove === 'Rock') {
        result = 'You lose'
    }
} else if (playerMove === 'Paper') {
    if (pcMove === 'Paper') {
        result = 'You tie'
    } else if (pcMove === 'Scissors') {
        result = 'You lose'
    } else if (pcMove === 'Rock') {
        result = 'You win'
    } 
} else if (playerMove === 'Rock'){
    if (pcMove === 'Rock') {
        result = 'You tie'
    } else if (pcMove === 'Paper') {
        result = 'You lose'
    } else {
        result = 'You win'
    }

}

if(result === 'You win'){
    score.wins +=1
}else if (result === 'You lose'){
    score.losses += 1
}else if (result === 'You tie'){
    score.ties += 1
}

    localStorage.setItem('score',JSON.stringify(score)) // salvando no local storage. e convertendo para string

updateScoreElement();

document.querySelector('.js-result')
    .innerHTML=`${result}`

document.querySelector('.js-moves')
    .innerHTML= `You 
<img src="assets/${playerMove}-emoji.png" alt="" class="move-icon">
<img src="assets/${pcMove}-emoji.png" alt="" class="move-icon">
Computer`



}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML= `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`
}


function pickComputerMove() {
const randomNumber = Math.random(); // Random always generates a number grather than igual to 0 and less than 1 >= 0 < 1
let pcMove = '';

if (randomNumber >= 0 &&    randomNumber < 1 / 3) {
    pcMove = 'Rock';

} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    pcMove = 'Paper';

} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    pcMove = 'Scissors';

}
return pcMove;
}
