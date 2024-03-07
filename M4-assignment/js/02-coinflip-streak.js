/*-------------------------------------------------------------------------------
# Name:        module 4 / Question #2
# Purpose: 
# Author:      Gloire Kanda
# Created:     03/05/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/

let randomNum = Math.round(Math.random()) // Creates a variable randomNum 
let coinFlip; // Creates a variable coinFlip

 do{

    coinFlip = randomNum;

    // Use a conditional statement to check the result of the coin flip
    if(coinFlip === 0){

        console.log("Heads")
    
    }

    else{
        console.log("Tails");
    
}
}while(coinFlip !== 1) // Condition to end the loop
