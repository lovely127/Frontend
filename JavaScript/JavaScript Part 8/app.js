//Array Methods - sare callback ko as an input lnge
//1. forEach
//using function definition
let arr = [1,2,3,4,5];
function print(el)
{
    console.log(el);
}
arr.forEach(print);

//using function name
arr.forEach(function(el){
    console.log(el);
});

//using arrow function
arr.forEach((el)=>{
    console.log(el);
});

//we can use forEach for objects as well
//array of objects let arr = [{},{},{}];
let array = [{
    name:"aman",
    marks:95
},
{
    name:"shradha",
    marks:94
},
{
    name:"rajat",
    marks:92
}];
console.log(array);
//har ek student ko print krana
array.forEach((student)=>{
    console.log(student);
});
//har ek student ke marks print karane hain
array.forEach((student)=>{
    console.log(student.marks);
});



//Map - same as for each bss ek nayi arrya return krta h, callback function apply krke
let num = [1,2,3,4];
let double = num.map((el)=>{
    return el*2;
});
console.log(double);

// percentage to gpa me convert karna
let gpa = array.map((students)=>{
    return students.marks/10;
});
console.log(gpa);


//Filter -> agar callback function true dega to nyi aaray me add krenge

let nums = [1,2,3,4,5,6,7,8,9];
let even = nums.filter((el)=>{
    return el%2==0;
});
console.log(even);


//every
[2,4,6].every((el)=>el%2==0); //it will return true
[1,2,4,6].every((el)=>el%2==0); //it will return false


//Reduce Method
let numbers = [1,2,3,4];
//let finalValue = numbers.reduce((res,el)=>(res+el));
let finalValue = numbers.reduce((res,el)=>{
    console.log(res);
    return res+el;
});
console.log(finalValue);



//Maximum in array using reduce method
let a = [1,2,3,6,4,7,3];
let maximum = a.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else
    return max;
});
console.log(maximum);


//PracticeQues - Check if all numbers in array are multiple of 10 or not
let numb = [11,20,30,40];
let ans = numb.every((el)=>(el%10==0));
console.log(ans);

//default parameters
function sum (a,b=2){
    return a+b;
}
console.log(sum(4,5)); //iska ans 9 hoga
console.log(sum(6)); // isme default parameter ka concept use hoga, ans 8


//Spread
let arrr = [1,2,3,4,5,0];
console.log(Math.min(...arrr));
console.log(...arrr);
console.log(..."ApnaCollege");

//Spread (Array Literals)
let ar = [1,2,3,4];
let newar = [...ar];
console.log(newar);

let chars = [..."hello"];
console.log(chars);

let odd = [1,3,5,7];
let evn = [2,4,6,8];
let combo = [...odd,...evn];
console.log(combo);



//Rest
function sum(...args){
    for(let i=0;i<args.length;i++)
    {
        console.log("you have us : ", args[i]);
    }
}
console.log(sum(1,2,3,4));
console.log(sum(5,6,7,8,9,1,2,3,4,5));

function min(a,b,c,d){
    console.log(arguments);
    //arguments.push(1); //this line will give error
}
console.log(min());
console.log(min(1,2,3,4))

// function summ(){
//     return arguments.reduce((sum, el)=>sum+el); //This line will give error
// }
//instaed we can write this
function summ(...args){
    return args.reduce((sum, el)=> sum+el);
}
console.log(summ(1,2,3,4));




//Destructuring
let names = ["tony","bruce","peter","steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];
// in teeno lines ko sort me likhne ka tareeka
let [winner,runnerup, secondrunnerup] = names;
//let [winner, runnerup, ...others] = names; //baki ki bachi array ko others store kr lega
console.log(winner);
console.log(runnerup);
console.log(secondrunnerup);
//console.log(others);



//Destructring objects
const stu ={
    name:"karan",
    age: 19,
    class: 9,
    subjects: ["hindi","english","math","scinece"],
    username: "karan@123",
    password: "abcd",
    city: "Pune"
};
//ab object ko destructure karenge
//let {username, password} = stu;
// console.log(username);
// console.log(password);
// console.log(user);
//maan lo ab username ko user ke naam se search krna h and password ko secret variable me daalna h
let {username: user, password: secret, city="Mumbai"} = stu;
//console.log(username); // now these lines will give error
//console.log(password);
console.log(user);
console.log(secret);
console.log(city);
//agar koi ese property jo student ke andar exist nhi krti h to hm destucturing ke time pe uski
//default value add bhi kr sakte hain. yha hm city ko add kr rhe.
//Note - Agar hmne stu object me ek city ka key value pair add kr diya to whi print hoga, ab
//default vaule print nhi hoga
 




