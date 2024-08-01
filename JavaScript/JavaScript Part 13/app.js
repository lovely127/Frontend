/*let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);     //ye ek promise return krega
        console.log(res.data);
    } 
    catch(e){
        console.log("Error - ",e);
    }
    
   }*/
//Output of above code
//    Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"
//     [[PromiseResult]]: undefined

// {fact: 'In the 1750s, Europeans introduced cats into the Americas to control pests.', length: 75}




//Upper wale code se console me o/p aayega now we want ki
//output web browser me aaye using HTML, js

//we want button ki click krne pe fact gernarate ho so we need so select the button first
//then uspe click ka event listene lagana padega

/*let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
}); 


let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);     //ye ek promise return krega
        return res.data.fact;
    } 
    catch(e){
        return "No Fact Found";
    }
    
   }*/




   //Sending headers with API requests
   //object pass krenge jisme header as key
   //and value bhi ek object hogi jisme key value pair honge
   const url = "https://icanhazdadjoke.com/";
   
   async function getJokes(){
    try{
        const config = {headers:{Accept:"application/json"}};   //ye header add krne se data json me aa jayega
        let res = await axios.get(url,config);
        console.log(res.data.joke);            //isse jo output aa rha h wo html form me h, usko json banane ke liye header pass krenge
    }
    catch(e){
        return "No jokes";
    }
   }