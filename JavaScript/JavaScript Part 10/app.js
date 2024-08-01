// let btn = document.querySelector("button");
// console.dir(btn);
// //Abhi button ko click krenge to kuchh ni hoga but
// //We can trigger a function when we click the button
// btn.onclick = function(){
//     console.log("Button was clicked");
// }



//for Multiple buttons
// let btns = document.querySelectorAll("button");

// for(btn of btns)
// {
//     // btn.onclick = sayHello; //idhar hm sayHello() nahi likhenge kyuki fir fuction pehle hi execute ho jayega for sare button, baad me jab button pe click krenge to kuchh print ni hoga
//     // btn.onmouseenter = function(){
//     //     console.log("You entered a button");

//     //Event Listener
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     //doubleclick event
//     btn.addEventListener("dblclick",function(){
//         console.log("You double clicked me");
//     });
//     }

// function sayHello()
// {
//     alert("Hello!");
// }
// function sayName()
// {
//     alert("ApnaCollege");
// }


//Event Listener for elements
// let para = document.querySelector("p");
// para.addEventListener("click",function(){
//     console.log("Paragraph was clicked");
// });

// let div = document.querySelector("div");
// div.addEventListener("mouseenter",function(){
//     console.log("Inside box")
// });




//This in Event Listenrs
// let butn = document.querySelector("button");
// butn.addEventListener("click",function(){
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });
// //This for multiple object
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// //We want ki jispe bhi click kre wo print ho or uska color blue ho jaye

// function changecolor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// p.addEventListener("click",changecolor);
// h1.addEventListener("click",changecolor);
// h3.addEventListener("click",changecolor);



//keyborad Events
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// // inp.addEventListener("keydown",function(){
// //     console.log("Key was Pressed");
// // });
// inp.addEventListener("keyup",function(event){
//     console.log("code = ",event.code);
//     console.log("key = ",event.key);
//     //console.log(event);
//     //console.log("Key was released");
// });



//Form Events
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("form submitted");
//     //alert("form submitted");

//     //Extracting form data
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     //console.dir(inp.innerText);
//     console.dir(inp.value);
// });



//Extracting form data 
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");
//     //dusra tarika to extract elements
//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.dir(user.value);
//     console.dir(pass.value);

//     alert(`Hi ${user.value}, Your passwors is set to ${pass.value}`);
// });




//More Events
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let user = document.querySelector("#user");   
    });
let user = document.querySelector("#user");
    
user.addEventListener("change",function(){
    console.log("change event will trigger");
    console.log("Final Value = ",this.value);

});

user.addEventListener("input",function(){
    console.log("change event will trigger");
    console.log("Final Value = ",this.value);

});
        