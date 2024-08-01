//asunc functions
async function greet(){                  //by default async function retruns promise
    // abc.abc();
    throw "some random error";           //use to throw some error, promise reject ho jayega
    return "hello!";
}
greet()
.then((result)=>{
    console.log("Result of promise - ", result);
    console.log("promise was resolved");
})
.catch((err)=> {
    console.log("Result of promise - ", err);
    console.log("Promise was rejected");
})

//arrow functions ko bhi async bna sakte hain
let demmo = async () => {
    return 5;
}





//Await keyword
// function getNum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }
// async function demo(){
//     // getNum();
//     // getNum();
//     // getNum();
//     //upper wale case me teen number ek sath print ho jayenge,
//     //but we want ki 1 sec baad ek ek no print ho,
//     //uske liye await use krenge, jab tk pehla promise reslove
//     //nahi ho jata tab ta dusra execute nahi hoga
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }




//Handling rejections 
function getNum(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let num = Math.floor(Math.random()*10) + 1;
                if(num>4){
                    reject("promise rejected");
                }
                console.log(num);
                resolve();
            },1000);
        });
    }
    async function demo(){
        try{
            await getNum();
            await getNum();
            await getNum();
            await getNum();
            await getNum();
            await getNum();
        }
        catch(err){
            console.log("Error caught - ", err );
        }

        let a = 5;
        console.log(a);
        console.log("New Number = ", a+3);
    }







//Accessing JSON data - API
let jsonRes = '{"fact": "Approximately cat looks good","length":78}';
console.log(jsonRes);
console.log(jsonRes.fact); //undefined, we can not access this, so will convert into js obj

//Convert JSON to JS object
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

//convert JS object to JSON
let student = {
    name :"Lovely",
    marks: 100,
};
console.log(JSON.stringify(student));




//Our First API Request
//let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     //console.log(res.json());     //promise retrun krta h
//     return res.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err) =>{
//      console.log("Error - ",err);
//     });
//upper wala code ek request ke liye, beow code for multiple requests
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
//     })
//     .then((data1)=>{
//         console.log("data1 - ", data1);
//         return fetch(url);           //dusri request ke liye call lgayi
//    })
//    .then((res2)=>{
//     return res2.json();
//    })
//    .then((data2)=> {
//     console.log("data2 -  ", data2);
//    })
//    .catch((err) =>{
//     console.log("Error - ",err);
//    });




   //Same kaam using async and await
   let url = "https://catfact.ninja/fact";
//    async function getFacts(){
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
//    }

//in case of any error maan lo url gaalta daa diya to it will be good to use try catch
// async function getFacts(){
//     try{
//         let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//     } catch(e) {
//         console.log("Error - ",e);
//     }
//     console.log("Byee");
//    }

//For Multiple calls
async function getFacts(){
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);

    }   catch(e) {
        console.log("Error - ",e);
    }
    console.log("Byee");
   }





   