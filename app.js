// Game Function
//  - player must guess a number between min and max
//  - Player must get  a certain amout of guess
//  - Notify player the number of uess remaining
//  -Notify the player of the correct answer if loose
//  -Let the playre to play again

//Gamne values
let min = 1,
    max=10,
    winngNum= getWinningNum(min,max),
    guessLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      min_Num = document.querySelector('.min-num'),
      max_Num = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message= document.querySelector('.message');

//Assign value to UI
min_Num.textContent=min;
max_Num.textContent=max;

//Play Again event listener
game.addEventListener('mousedown',function (e) {
    if (e.target.className === 'play-again'){
        window.location.reload();
    }

})





//Listen for guess
guessBtn.addEventListener('click',function () {
    let guess =parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess < min || guess > max ){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }



    if (guess === winngNum){

        //disable Input
        // guessInput.disable =true;
        //
        // // change border color
        // guessInput.style.borderColor ='green';
        //
        // //Set Messaage
        // setMessage(`${winngNum} is correct ! . You win`,'green');

        let message = `${winngNum} is correct ! . You win`;

        gameOver(true,message);



    } else{

        //wrong numnber
        guessLeft -= 1;

        if (guessLeft === 0){
            //Game Over you lose
            // guessInput.disable =true;
            // guessInput.style.borderColor = 'red';
            let message =`Game Over. You Lost. The correct Number is ${winngNum}`;

            gameOver(false,message);
        }else{
            //Game continue wrong answer
            guessInput.style.borderColor ='red';

            //clear Input
            guessInput.value="";

            //tell the user the no of guess left
            setMessage(`This is not the correct answer. ${guessLeft} guess are left try again`,'red');
        }

    }

});


//Game Over

function gameOver(won,msg) {

    guessInput.disable =true;
    let color;
    // change border color
    if (won){
        color='green'
    }else {
        color='red';
    }

    guessInput.style.borderColor =color;

    //Set Messaage
    setMessage(msg,color);

    guessBtn.value='Play Again';
    guessBtn.className += 'play-again';
    
}

function setMessage(msg,color) {

    message.style.color =color;
    message.textContent =msg;
}

function getWinningNum(min,max) {

    return Math.floor(Math.random()*((max -min+1)+min));

}