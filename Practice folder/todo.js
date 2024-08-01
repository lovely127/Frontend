let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

//Button pe click krke add krna h task
btn.addEventListener("click",function()
{
    let item = document.createElement("li");
    item.innerText = inp.value;

    //delete button add krna
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    inp.value = "";
});

//delete button ko functioning banana
let delbtns = document.querySelectorAll(".delete");
for(delbtn of delbtns)
{
    delbtn.addEventListener("click",function()
    {
        //delete button ka pura parent remove kr denge
        let par = this.parentElement;
        par.remove();
    })
}

//upper wala sirf existing element ke liye kaam krega jo naye add ho rhe unke liye
//hame event bubbling ka concept lagana padega, parent
//parent pe event listener trigger karayenge to child pe trigeer hoga

ul.addEventListener("click", function(event)
{
    
    if(event.target.nodeName == "BUTTON")
        event.target.parentElement.remove();
    
})