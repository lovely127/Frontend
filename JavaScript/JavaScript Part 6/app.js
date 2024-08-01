//Functions
//Create a function that check if person is adult or not
function isAdult()
{
    let age = 17;
    if(age>=18)
    {
        console.log("Person is adult");
    }
    else
    {
        console.log("Person is not adult");
    }
}
isAdult();

//Create a Poem
function printPoem()
{
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are");
}
printPoem();

//Create a function to roll a dice and always displays a value of dice(1 to 6)
function rollDice()
{
    let rand = Math.floor(Math.random()*6 ) + 1;
    console.log(rand);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

//Functions with arguments
function printInfo(name,age)
{
    console.log(`${name} age is ${age}`);
}
printInfo("Lovely",25);
printInfo("Rajat");
printInfo(14);

//Create a function that gives average of 3 numbers
function calcAvg(a,b,c)
{
    average = (a+b+c)/3;
    console.log(average);
}
calcAvg(1,2,3);
calcAvg(3,6,9);
calcAvg(9,12,15);

//Create a function to print table of a number
function printTable(n)
{
    for(let i=n;i<=n*10;i=i+n)
    {
        console.log(i);
    }
}
printTable(7);

//Return keyword - create a number that returns sum of numbers from 1 to n
function sum(n)
{
    let s = 0;
    for(let i=1;i<=n;i++)
    {
        s = s + i;
    }
    return s;

}
console.log(sum(10));

//Create a function that returns the cancatenation of all strings in array
let str = ["hello","Hi","Byee","Byee"];
function concatStr(str)
{
    let result=  "";
    for(let i=0;i<str.length;i++)
    {
        result = result + str[i];
    }
    return result;
}
let concatstring = concatStr(str);
console.log(concatstring);


//Functions with expressions
let hello = function()
{
    console.log("hello");
}
hello(); //hello variale h but usko function ki tarah treat krenge


//Higher order function - function that does one or both
//Functions which take one or multiple functions as a argumnt
//returns a function
function multigreet(func,n) //higher order function 
{
    for(let i=1;i<=n;i++)
    {
        func();
    }
}
let greet = function()
{
    console.log("namaste");
}
multigreet(greet,2);


//Methods - object ke andar wale function k method (key value pair)
const calculator = 
{
    num : 55,
    add : function(a,b){
        return a+b;
    },

    sub : function(a,b){
        return a-b;
    },

    mul : function(a,b){
        return a*b;
    }
};
console.log(calculator.num);
console.log(calculator.add(55,56));
console.log(calculator.sub(199,55));
console.log(calculator.mul(300,600));

//shorthand for Method
const calculatorshort = 
{
    num : 55,
    add(a,b)
    {
        return a+b;
    },

    sub(a,b)
    {
        return a-b;
    },

    mul(a,b)
    {
        return a*b;
    }
};