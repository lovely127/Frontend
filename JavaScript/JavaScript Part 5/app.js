//Creating Object Literals
const student1 = {
    name: "Shradhha",
    age: 23,
    marks: 94.4
};

let student2 = ["Shradha",23,94.4];  //object literlas me randam order me print hota h, array me same order me
console.log(student1);
console.log(student2);

const item = {
    price :100.99,
    discount: 50,
    colors : ["red","pink"]
};
console.log(item);

//Create a twitter or thread post
const post = {
    username:"Shradha",
    content:"This is my first post",
    likes: 150,
    reposts: 5,
    tags : ["@apnacollege","@Delta"]
};
console.log(post);

//Get Value - two ways
console.log(post["content"]);
console.log(post["likes"]);
console.log(post.content);
console.log(post.likes);
console.log(post.reposts);
console.log(post.tags);
console.log(post.tags[0]);
//jab hm variable ka use ka re h to assign some key tab we can use []
let prop = "reposts";
console.log(post[prop]);
console.log(post.prop);  //It will give undrfined

//Add/Update value
const student={
    name: "lovely",
    age: 25,
    city: "delhi",
    marks: 99
};
console.log(student.city);
//now change the value of city
student.city = "mumbai";
console.log(student.city);
console.log(student);
//add new value
student.gender = "female";
console.log(student);  //gender key value pair will be added
//change the student marks to A
student.marks = "A";
console.log(student);
student.marks = [99,84,72]; //mark me array bhi daal sakte hain
console.log(student);
//agar delete krna h to
delete student.marks;
console.log(student);

//Nested Objects
const classInfo = {
    aman:{
        grade:"A+",
        city: "Mumbai"
    },
    shradha:{
        grade:"A",
        city:"Delhi"
    },
    Karan:{
        grade:"o",
        city:"Pune"
    }
};
console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.shradha.city);
classInfo.shradha.city = "Gurgaon";
console.log(classInfo);

//Array of objects
const classinformation = [
        {
            name: "Aman",
            grade:"A+",
            city: "Mumbai"

        },
        {
            name: "Shrdha",
            grade:"A",
            city: "Pune"
        },
        {
            name: "Karan",
            grade:"O",
            city: "Delhi"
        }

];
console.log(classinformation);
console.log(classinformation[1]);
console.log(classinformation[1].name);

//Random Integers - Generate from 1 to 10
let num = Math.random();
num = num * 10;
num = Math.floor(num);
num = num + 1;
console.log(num); //isko console pe chalana padega for diff outputs
//short - Math.floor(Math.random()*10) +1;
// 1 to 100 ke liye - Math.floor(Math.random()*100) +1;
// 1 to 5 ke liye - Math.floor(Math.random()*5) +1;







