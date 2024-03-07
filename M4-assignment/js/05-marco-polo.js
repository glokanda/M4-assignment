/*-------------------------------------------------------------------------------
# Name:        module 4 / Question #5
# Purpose: 
# Author:      Gloire Kanda
# Created:     03/05/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/

// Use a conditional statement to check the multiple of  numbers  and
// display a message in the console window.


for( let i = 1; i <= 100; i++){

    if( i % 3 === 0 ){

        console.log("Marco!");
    }

    else if( i % 5 === 0 ){

        console.log("Polo!");
    } 

    else if ( i % 3 === 0 && i % 5 === 0){

        console.log("Marco! Polo!");
    }

    else{

        console.log(i)
    }



}

