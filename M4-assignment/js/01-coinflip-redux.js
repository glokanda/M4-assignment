/*-------------------------------------------------------------------------------
# Name:        module 4 / Question #1
# Purpose: 
# Author:      Gloire Kanda
# Created:     03/05/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/

let randomNum = Math.round(Math.random()); // Creates a variable randomNum 
let coinFlip; // Creates a variable coinFlip

// Prompt the user to enter a number of time to flip the coin

let userEntry = parseInt(prompt("Enter the amount of times that the for loop will executed "));

for(let i = 0; i < userEntry; i++){

    coinFlip = randomNum;

    if(coinFlip === 0){

        console.log("Heads")
    
    }

    else{
        console.log("Tails");
    }
}


