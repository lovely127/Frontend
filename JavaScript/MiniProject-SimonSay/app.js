//There will be two arrays ek game ka seq ek user ka
let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];

//initial conditon jab game start nhi hua
let started = false;
let level=0;

//Step 1 - Koi bhi key press kre to game start ho jaye
document.addEventListener("keypress", function(){
    if(started == false)
    {
        console.log("Game started");   //kyuki ek baar key press ho jayegi to game start ho jayeg
        started = true; //isliye started varible change krenge so that game baar baar start na ho

        levelUp();
    }
});





//Step - 2 level up ho jaye and button flash ho jaye.
function gameFlash(btn)                           //game ka flash
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn)                             //user click kreha tab ka flash
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}


let h2 = document.querySelector("h2");
function levelUp(){
    userSeq = [];    //jaisi hi level up ho to userseq ko reset kr denge to empty value
    level++;
    h2.innerText = `Level ${level}`;
    //game kisi random button ko choose krega uske baad button ko flash karwayega
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);  //gameseq array me game ne jo color generate kiya wo push krenge
    console.log(gameSeq);
    gameFlash(randBtn);
}




//Step - 4 userSeq aaray and gameSeq array ko dekhna h match kr rhi ya nhi
function checkAns(idx)
{
    console.log("curr level :", level);
    //jo level ki value hogi whi size gameSeq array and userSeq array ka hoga
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        //console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        //h2.innerText = `Game Over! Press any key to start.`;
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor = "white";   
        },500);
        reset();
    }
}

//Step - 3 button event listener - jab user button ko click kre to flash ho jaye (greenflash)
function btnPress()
{
    //console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);    //userSeq array me user ne jo color push kiya wo daal denge

    //Matching seq check krne ke liye
    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
  btn.addEventListener("click",btnPress);
}



//Step 5 - reset the game
function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}