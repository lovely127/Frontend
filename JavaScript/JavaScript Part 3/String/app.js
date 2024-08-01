//Strings
// Trim Method
let msg = "    Hello  ";
console.log(msg.trim());
let password = prompt("Enter your Paswword");
let newPass = password.trim();
console.log(newPass);
console.log(password);

//toLowerCase and UpperCase
let name = "Apna College";
console.log(name.toLowerCase());
console.log(name.toUpperCase());

//index of Method
let strname = "ILovecoding";
console.log(strname.indexOf('Love'));
console.log(strname.indexOf('love'));
console.log(strname.indexOf('o'));
console.log(strname.indexOf('z'));
console.log(strname.indexOf('C'));    //case sensitive, it will return -1


//Method chaining
newmsg = msg.trim().toUpperCase();
console.log(newmsg);

//Slice Method
let strslice = "apnacollege";
console.log(strslice.slice(0,4)); //ending index will be non inclusive
console.log(strslice.slice(4,11));
console.log(strslice.slice(-3)); //11-3 = 8 onwards

//Replace Method
console.log(strname.replace("Love","do"));
console.log(strname.replace("o","x")); //replace first occurance only

//Repeat Method
console.log(strname.repeat(3));

