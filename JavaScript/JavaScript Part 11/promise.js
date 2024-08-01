function savetoDB(data){
    return new Promise((resolve, reject) =>{
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4){
            resolve("Success: data was saved");
        }
        else{
            reject
            ("Failure : Weak Connection");
        }
     });
}




//then() and catch() methods
// let request = savetoDB("apna college");   //req = promise object
// //console.log(request);
// request.then(()=> {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=> {
//     console.log("request was rejected");
//     console.log(request);
// })

//improved version - 

// savetoDB("apna college")
// .then(()=> {
//     console.log("promise was resolved");
// })
// .catch(()=> {
//     console.log("request was rejected");
// })





//promise chaining - improved version of callback hell wala code

// savetoDB("apna college")
// .then(()=> {
//     console.log("data1 was saved");
//     savetoDB("hello world")            //agar pehle data save ho gya to dusra karayenge
//     .then(()=> {
//         console.log("data2 was saved");
//     })
// })
// .catch(()=> {
//     console.log("Promise was rejected");
// })

//upper wale code ka improved version - kyuki ye bhi callback hell jaisa lag ra h
//isko readble banate hain

// savetoDB("apna college")
// .then(()=> {
//     console.log("data1 was saved");
//     return savetoDB("hello world");          //dusre data ke liye firse ek promise return kra denge 
// })
// .then(()=> {
//     console.log("data2 was saved");          //we can have multiple try and one catch same concept
//     return savetoDB("shraddha");
// })
// .then(()=> {
//     console.log("data3 was saved");
// })
// .catch(()=> {
//     console.log("Promise was rejected");
// })






//Results and error in promise
savetoDB("apna college")
.then((result)=> {
    console.log("result of promise : ", result);   //ye result base code se aayega line no 5
    console.log("data1 was saved");
    return savetoDB("hello world");          
})
.then((result)=> {
    console.log("result of promise : ", result);
    console.log("data2 was saved");          
    return savetoDB("shraddha");
})
.then((result)=> {
    console.log("result of promise : ", result);
    console.log("data3 was saved");
    
})
.catch((error)=> {
    console.log("result of promise : ", error);
    console.log("Promise was rejected");
    
})