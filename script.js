/**
 * Guess the number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO:Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high,too low,or is correct inside playGame function
 * TODO:Create a function called displayResult to move the logic for if the guess is too high,or correct
 * TODO:Complete the show  YouWon... ,showNumberAbove,showNumberBelow
 * TODO:Use the showYouWon.. functions within displayResult to display the correct dialog
 * TODO:Save the guess history in a variable called guesses
 * TODO:Display the guess history using displayHistory() function
 * TODO:Use the initGame() function to restart the game
 */
//variable to store the list of guesses
let guesses=[];

//variable for store the correct random  umber
let correctNumber=getRandomNumber();

//variable to store the correct random number
window.onload=function(){
        document.getElementById("number-submit").addEventListener("click",playGame);
        document.getElementById("restart-game").addEventListener("click",initGame);
        getRandomNumber;
        
        
}

//Function for playing the whole game
function playGame() {

    let numberGuess=document.getElementById('number-guess').value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();

}
//show the result if the guess it too high,too low or correct
function displayResult(numberGuess) {
    
    if(numberGuess > correctNumber){
        showNumberAbove();

    }
    else if(numberGuess < correctNumber){
        showNumberBelow();
    }
    else if(numberGuess == correctNumber){
        showYouWon();
    }
}
/**
 * Initiate a new game by resetting all value content on the
 * HINT:reset the correctnumber,guesses, and HTML content
 */
function initGame(){
 //Reset the correct number
 //Reset the result display
 //Reste the guesses array
 //Reset the guess history display
 correctNumber=getRandomNumber();
 document.getElementById("result").innerHTML="";
 guesses=[];
 displayHistory();
}

//Return random number between 1 to 100 using Math.random
function getRandomNumber() {

 let randomNumber=Math.random();
 let wholeNumber=Math.floor(randomNumber*100)+1;
 console.log(randomNumber);
 console.log(wholeNumber);
 return wholeNumber;
    
}

/*
save the guess history
HINT: Search Google "append ro array in javascript"
HINT: Use the guesses variable
*/
function saveGuessHistory(guess) {
 guesses.push(guess);
 console.log(guesses);


}
/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 * <li class='list-group-item'>You guessed {number}</li>
 * </ul>
 * HINT:use while loop and string concatenation to create a list
 */
function displayHistory () { 
    let index=guesses.length-1; //TODO
    let list="<ul class='list-group'>";

while(index >= 0) {
    list += "<li class='list-group-item'>"+ "You guessed "+guesses[index]+"</li>";
    index-=1;
}
list += '</ul>';
document.getElementById("history").innerHTML=list;

}


/*Retrive the dialog based on if the guess is wrong or correct*/

function getDialog(dialogType,text){
    let dialog;
    switch(dialogType){

        case "warning":
            dialog = '<div class="alert alert-warning" role="alert">';
            break;
        case "won":
            dialog = '<div class="alert alert-success" role= "alert">';
            break;

    }
    dialog += text;
    dialog += "</div>";
   return dialog;

}

function showYouWon() {
    const text="Awesome job,you got it!"
    /*
    *retrive the dialog using the getDialog() function
    *and save it to variable called dialog
    *HINT:Use the 'won'and text parameters
    */
   let dialog = getDialog('won',text);
   console.log(dialog);
    document.getElementById("result").innerHTML=dialog;
}

function showNumberAbove(){
    const text="Your guess is too high! "
    /*
    *Retrive the dialog using the getDialog() function
    *and save it to variable called dialog
    *HINT:Use the 'warning and text parameters
    */
   let dialog = getDialog('warning',text)
    document.getElementById("result").innerHTML=dialog;
}

function showNumberBelow(){
    const text="Your guess is too low! "
      /*
    *Retrive the dialog using the getDialog() function
    *and save it to variable called dialog
    *HINT:Use the 'warning and text parameters
    */
   let dialog = getDialog('warning',text)
    document.getElementById("result").innerHTML=dialog;
}