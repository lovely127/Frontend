// const student={
//     name:"lovely",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg()
//     {
//         let avg = (eng + math + phy)/3;
//         console.log(avg);
//     }
// }
// console.log(student.name);
// console.log(student.getAvg()); //error - eng is not defined so we have to use this to access eng

//Using This keyword - refers to an object that is executing current peice of code
const student={
    name:"lovely",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg()
    {
        console.log(this); //student object print hoga
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
        console.log(`${this.name} got avg marks = ${avg} `);
    }
}
console.log(student.name);
console.log(student.getAvg());
console.log(this); //window object print hoga

//if we print this outside the object - then window object will print.

function getAvg()
{
    console.log(this);
}



//Try and Catch
// console.log("hello");
// console.log("hello");
// console.log(a); //error a is not defined, iske neeche ka code print nhi hoga, ab is error ko handle krenge using try cathc
// console.log("hello2");
// console.log("hello2");


console.log("hello");
console.log("hello");
//let a = 5; //if we create a variablr a to try koi error thorug ni krega catch kuchh catch ni krega, to print ni karega
try{
    console.log(a);   //error handled using try catch, ab neeche a code bhi print hoga
} 
catch
{
    console.log("caught an error, a is not defined");
}
console.log("hello2");
console.log("hello2");


//print error using catch as a function
console.log("hello");
console.log("hello");
try{
    console.log(a);   //error handled using try catch, ab neeche a code bhi print hoga
} 
catch (err)
{
    console.log("caught an error, a is not defined");
    console.log(err); //ye red me print ni hoga kyuki hmne print karaya
} 
console.log("hello2");
console.log("hello2");



//Arrow functions
const sum = (a,b) => {
    console.log(a+b);
};
const cube = (n) => {
    return n*n*n;
}



//implicit return in arrow functions
const mul = (a,b) => a*b;      //a*b return hoga
//upper ke functions ko is form me likhna
const sumshort = (a,b) => a+b;
const cubeshort = n => n*n*n;



//Set timeout
console.log("Hi There");
setTimeout(() => {
    console.log("Apna college");
}, 4000);
console.log("Welcome to");



//setInterval
// setInterval(() => {
//     console.log("Apna college");
// }, 2000);
//to stop execution , function ki id ko ek variable me save kro and clearinterval kr do
let id = setInterval(() => {
    console.log("Apna college");
}, 2000);
clearInterval(id);

let id2 = setInterval(() => {
    console.log("Hello world");
}, 3000);
clearInterval(id2);



//This with arrow functions
const stu = {
    name : "aman",
    marks : 95,
    prop : this, //global scope, window object

    getName: function(){
        console.log(this);
        return this.name;
    },

    getMarks: ()=>{
        console.log(this); //Parents scope
        return this.marks;
    },

    //builtin windows function ke liye
    getInfo1: function(){
        setTimeout(() => {
            console.log(this);   //student
        }, 2000);
    },

    getInfo2: function(){
        setTimeout(function (){
            console.log(this);   //window
        }, 2000);
    }
    
    
};
console.log(stu.getName());
console.log(stu.getMarks());

console.log(stu.getInfo1());
console.log(stu.getInfo2());


//Practice ques 1 - return square of number n.
const square = (n) => n*n;
console.log(square(8));

//Practice Ques 2 - WAP that prints "Hello World" 5 times at interval of 2 sec.
let iid = setInterval(()=>{
    console.log("Hello World");
},2000);
//ab isko rokta h 5 baar run karake mtlb 10 sec baad rokna h, isko id lo, will use clearinterval using settimout

setTimeout(()=>{
    clearInterval(iid);
    console.log("Clear Interval ran");
},10000);