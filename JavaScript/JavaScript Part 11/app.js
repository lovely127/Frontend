//JS Call Stack
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();



//JS is Single Threaded - Wait krne ka kaam brower krega
setTimeout(()=>{
    console.log("apna college");
},2000);
setTimeout(()=>{
    console.log("Hello World");
},2000);
console.log("Hello....");



//Callback hell
h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "red"; //1 sec baad color red ho jaye
// }, 1000);

// setTimeout(()=>{
//     h1.style.color = "Orange";//uske ek sec baad orange ho jaye
// },2000);

// setTimeout(()=>{
//     h1.style.color = "Green";//uske ek sec baad green ho jaye
// },3000);

//-------Shortcut of above code-------------
// function changeColor(color, delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//     },delay);
// }
// changeColor("red", 1000);
// changeColor("blue", 2000);
// changeColor("teal", 3000);

//-------Using Callback->Depency dikhane ke liye ki red ke baad blue ho uske baad teal ho----
function changeColor(color, delay, nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange)nextColorChange();
    },delay);
}
changeColor("red",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("teal",1000,()=>{
            changeColor("pink",1000, ()=>{
                changeColor("brown",1000);
            });
        });
    });
});

//Above thing we call "Callback nesting or callback hell"




//Setting up for Promise
// function savetoDB(data)
// {
//     let internetSpeed = Math.floor(Math.random()*10) +1;
//     if(internetSpeed > 4)
//     {
//         console.log("Your data was saved : ", data);
//     }
//     else
//     {
//         console.log("Weak Connection : data not saved");
//     }
// }
//Upper wala kaam callbacks ki help se
function savetoDB(data, success, failure)
{
    let internetSpeed = Math.floor(Math.random()*10) +1;
    if(internetSpeed > 4)
    {
        success();
    }
    else
    {
        failure();
    }
}
savetoDB("apna college",
()=>{
    console.log("Success 1: Your data was saved");
    savetoDB("hello world",                       //Agar pehle data save ho tab hi dusra save ho
    ()=>{
        console.log("Success 2 : data2 saved");
        savetoDB("Shradhha",                     //Agar dusra data save ho tabhi teesra data save ho
        ()=>{
            console.log("Success 3 : data3 saved");
        },
        ()=>{
            console.log("Failure 3 : Weak Connection");
        });
    },
    ()=>{
        console.log("Failure 2 : Weak Cnnection");
    });
}, 
()=>{
    console.log("Failure: Weak connection data not saved");
})


