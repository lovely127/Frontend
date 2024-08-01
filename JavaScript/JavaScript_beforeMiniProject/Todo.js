let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function()
{
    //ek nya list item crate krke usme value dala
    let item = document.createElement("li");
    item.innerText = inp.value;

    //ek nya delet button create kiya
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    //delete button ko li ka child banaya like other buttons
    item.appendChild(delbtn);
    //item ko ul ka child bnaya like li
    ul.appendChild(item);
    //console.log(inp.value);
    inp.value = "";
});

//Ab hme delete buttons ko functioning banana h
//sare delete buttons ke upper event listener add krna padega
// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click", function(){
//         //pura list item remove krna h mtlb delete button ka parent
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }



//Event delegate for above code kyuki ye nye element pe work ni kr ra h
//child ki wajah parent pe event listener trigger kra denge to wo child pe bhi work krega

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON")
    {
        let listitem = event.target.parentElement;
        listitem.remove();
    }
});