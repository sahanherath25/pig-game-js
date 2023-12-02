'use strict';

const scoreEL1=document.querySelector("#score--0");
const scoreEL2=document.querySelector("#score--1");
const playerOne=document.querySelector(".player--0");
const playerTwo=document.querySelector(".player--1");
const playerOneCurrentScore=document.querySelector("#current--0");
const playerTwoCurrentScore=document.querySelector("#current--1");



//TODO  STARTING CONDITIONS

//TODO 1
//RESETTING PLAYER SCORE
scoreEL1.textContent=0;
scoreEL2.textContent=0;

//TODO 2
//HIDING THE DICE

const diceElement=document.querySelector(".dice");
diceElement.classList.add("hidden")
// diceElement? diceElement.style.display="none":null


const newBtn=document.querySelector(".btn--new");
const rollBtn=document.querySelector(".btn--roll");
const holdBtn=document.querySelector(".btn--hold");


//CURRENT SCORE

const scores=[0,0]

let currentScore=0;
let activePlayer=0;

//FUNCTIONS

const switchPlayer=()=>{
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer=activePlayer===0?1:0;
    currentScore=0
    playerOne.classList.toggle("player--active")
    playerTwo.classList.toggle("player--active")
}

//PLAYER 1 SCORE

rollBtn.addEventListener("click",()=>{

    //Generating a random dice roll
    const dice=Math.trunc(Math.random()*6)+1;

    // Display dice
    diceElement.classList.remove("hidden");
    diceElement.src=`dice-${dice}.png`

    if(dice!==1){
        currentScore+=dice;
        // playerOneScore.textContent=currentScore
        document.getElementById(`current--${activePlayer}`).textContent=scores[activePlayer].toString();
        scores[`${activePlayer}`]=currentScore
    }else {
    //    dice =1
        switchPlayer()
    }


//



})

// holdBtn.addEventListener("click",()=>{
// //    Getting the currently active player's current Score
//     const isPlayerOneHasActive=playerOne.classList.contains("player--active");
//     const isPlayerTwoHasActive=playerTwo.classList.contains("player--active");
//
//     if(isPlayerOneHasActive){
//         const score=parseInt(playerOneCurrentScore.textContent);
//         console.log("PLAYER ONE CURRENR SCORE ",score)
//         alert(`PLAYER ONE SCORE IS ${score}`)
//
//         scores[0]=score;
//         scoreEL1.textContent=scores[0].toString()
//     }
//
//     if(isPlayerTwoHasActive){
//         const score=parseInt(playerTwoCurrentScore.textContent);
//         console.log("PLAYER ONE CURRENR SCORE ",score)
//         alert(`PLAYER TWO SCORE IS ${score}`)
//         scores[1]=score;
//         scoreEL2.textContent=scores[1].toString()
//     }
//
//
// })
holdBtn.addEventListener("click",()=>{
//   Getting the currently active player's current Score

    scores[activePlayer]=currentScore;
    console.log("SCORE ",scores[activePlayer])
    document.getElementById(`current--${activePlayer}`).textContent=scores[activePlayer].toString()

    const selectedPlayer=document.getElementById(`current--${activePlayer}`);
    console.log("SELECTOR ",selectedPlayer)

//  Switching to next Player
    switchPlayer()

})
