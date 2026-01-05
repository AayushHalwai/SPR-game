        const computerBtn = document.querySelector('.computer-btn');
        const userBtns = document.querySelectorAll('.user-btn');
        const gameInfoPara = document.getElementById('game-info-para');
        const gameWin = document.getElementById('game-win');
        const gameDraw = document.getElementById('game-draw');
        const gameLoss = document.getElementById('game-loss');


function getRandomInt(max) {
  return Math.floor(Math.random()*max);
}

let computerValue= (getRandomInt(3));

let userValue = parseInt(ppt("Enter 0=scissors 1=rock  2=Paper"));

// 0 = scissors 1=rock  2= Paper
if(computerValue === userValue){
    console.log("Draw");
    
}

else if((computerValue === 0 || userValue === 1)||
    (computerValue === 1 || userValue ===2 )||
    (computerValue === 2 || userValue === 0)
){
    console.log("User Wins");
}
else {
    console.log("Computer WIns");
    
}

// for output 
let valueNameComputer ;
if (computerValue===0){
    valueNameComputer = "Scissors" ;
}
else if (computerValue===1){
    valueNameComputer = "Rock" ;
}
else 
{
    valueNameComputer==="Paper"
}
console.log("Computer's pick = "+ valueNameComputer);

let valueNameUser ;
if (userValue===0){
    valueNameUser = "Scissors" ;
}
else if (userValue===1){
    valueNameUser = "Rock" ;
}
else 
{
    valueNameUser="Paper"
}
console.log(`User's Pick = ${valueNameUser}`);



