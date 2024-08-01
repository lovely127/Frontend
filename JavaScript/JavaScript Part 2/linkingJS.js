// console.log("Hello World");
// console.log("Apna college");
let a = 10;
let b = 5;
console.log("Sum is :" , a+b);

//template Literals
console.log("Total price is - ", (a+b),"rupees.");
//using template literals
console.log(`Total price is ${a+b} rupees.`);

//Good string code

let str = "app";
if(str[0] === 'a' && str.length >3)
{
    console.log("Good string");
}
else{
    console.log("Not a good string");
}

//alert and prompt
// alert("something is wrong");
// console.log("This is a simple log");
// console.error("This is a error message");
// console.warn("This is a warning messgae");

// prompt("Enter your name");
let firstName = prompt("Enter our name");
console.log(firstName);