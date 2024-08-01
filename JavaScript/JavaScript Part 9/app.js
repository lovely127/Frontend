//Selecting Element by classname
//print sari old images
let smallimages = document.getElementsByClassName("oldImg");
for(let i=0;i<smallimages.length;i++)
{
    console.dir(smallimages[i]);
}
//we can print source as well for each image
for(let i=0;i<smallimages.length;i++)
{
    console.dir(smallimages[i].src);
}
//now manupulate (sari image me spiderman wali image ki link daal do)
for(let i=0;i<smallimages.length;i++)
{
    smallimages[i].src = "assets/spiderman_img.png";
    console.log(`Value of image no. ${i} has changed`);
}





//Select Element by Tag Name
console.dir(document.getElementsByTagName("p"));
//now update
document.getElementsByTagName("p")[1].innerText = "abc";



//Query Selector
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
//nesting
console.dir(document.querySelector("div a"));
//if we want all anchor tags
console.dir(document.querySelectorAll("div a"));



//Manipulating style (with Style attribute)
//change sare anchor tags ka color to green
let links = document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++)
// {
//     links[i].style.color = "green";
// }
//same cheej ko for of loop me likhna
for(link of links)
{
    link.style.color = "Purple";
}