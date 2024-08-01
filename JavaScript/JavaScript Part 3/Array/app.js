//Creating array
let marks = [99,85,93,76,62];
console.log(marks[1]);
console.log(marks.length);
let info = ["shraddha",23, 89.9];  //we can create mixed array as well;
console.log(info[0]);
console.log(info[0][0]);  //shradhha ka s print hoga

//Arrays are immutable
let fruits = ["mango","apple","banana"];
fruits[0] = "litchi";
console.log(fruits);
fruits[10] = "Pineaaple"; //we can add values as well
console.log(fruits);

//Array Methods
//push - add to end
let cars = ["audi","bmw","xuv","maruti"];
console.log(cars);
cars.push("toyota");
console.log(cars);
cars.push("Ferrari");
console.log(cars);
//pop - delete from end and return
cars.pop(); //it will delete and retrn ferrari
console.log(cars);
cars.pop();
console.log(cars);
//Unshift - add to start, Shift - delete from start and return
cars.unshift("toyota");
console.log(cars);
cars.shift(); //it will delete and return toyota

//Indexof (Returns index or -1) and Includes (Returns true or false) Method
console.log(cars.indexOf("bmw")); 
console.log(cars.indexOf("Xuv")); //case sensitive
console.log(cars.indexOf("xuv"));
console.log(cars.includes("bmw")); //true
console.log(cars.includes("Herrier"));

//Concat and Reverse
let primary = ["red","yellow","blue"];
let secondry = ["orange","green","voilet"];
let mergedarr = primary.concat(secondry);
console.log(mergedarr);
console.log(primary);  //concat se original array me changes ni aate hain but reverse se aate hain
console.log(primary.reverse());
console.log(primary);

//Slice
//Splice - remove, replace, add element in place
let colors = ["red","yellow","blue","orange","pink","white"];
console.log(colors.splice(4)); // 4 se aage ke delete
console.log(colors);
//for delete
console.log(colors.splice(0,1)); //red ht jayega
console.log(colors);
console.log(colors.splice(0,1,"black","grey")); // yellow hat jayega
console.log(colors); // blck grey add hoke print ho jayega
//agar middle me kisi element ko add krna h
console.log(colors.splice(1,0,"aqua"));//aqua 1st positon pe add hoga
console.log(colors);
//for replace
console.log(colors.splice(1,1,"magenta")); // aqua return krega
console.log(colors);


//Sort - works well for strings and characters but not for numbers.
console.log(colors.sort()); 
let chars = ['b','d','a','e'];
console.log(chars.sort());
let mark = [99,89,67,42,100];
console.log(mark.sort());

//Array Reference
console.log([1] == [1]);
console.log([1] === [1]); // both are false because it compares address
let arr = ['a','b','c'];
let arrcopy = arr;   //arrcopy ko arr ka address de dia, now they both are pointing to same address
console.log(arr == arrcopy);
console.log(arr === arrcopy);
arr.push("d"); //changes dono me reflect honge beacuse they are pointing to same add.
console.log(arr);
console.log(arrcopy);
console.log(arr == arrcopy);
console.log(arr === arrcopy);


//Constant Arrays
const array = [1,2,3];
console.log(array);
array.push(4);
console.log(array);
array.pop();
console.log(array);
//array = [1,2,3]; This will give error
//array = arr;  This will give error


//Nested Arrays
let nums = [[2,4],[3,6],[4,8]];
console.log(nums);
console.log(nums.length);
console.log(nums[0].length);
console.log(nums[0][0]);












