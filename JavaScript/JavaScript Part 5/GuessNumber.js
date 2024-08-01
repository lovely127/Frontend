// const max = prompt("Enter the max number");
// const random = Math.floor(Math.random()*max)+1;
// let guess = prompt("Guess the number");

// while(true)
// {
//     if(guess == "quit")
//     {
//         console.log("User quit");
//         break;
//     }
//     if(random == guess)
//     {
//         console.log("Congrats!! You have selected right number", random);
//         break;
//     }
//     else
//     {
//         guess = prompt("Your guess was wrong. Please try again");
//     }
// }



//-------------------------------------------------------------------------------------------------------
//Intoducing hints in this game

const max = prompt("Enter the max number");
const random = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the number");

while(true)
{
    if(guess == "quit")
    {
        console.log("User quit");
        break;
    }
    if(random == guess)
    {
        console.log("Congrats!! You have selected right number", random);
        break;
    }
    else if(guess<random)
    {
        guess = prompt("Hint - You guess is too small, Please try again");
    }
    else
    {
        guess = prompt("Hint - You guess is too large, Please try again");
    }
}