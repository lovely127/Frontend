// For loop - Print odd numbers
for(let i=1;i<=15;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}

//print even numbers
for(let i=1;i<=15;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

//Print multiplication of 5
for(let i=5;i<=50;i=i+5)
{
    console.log(i);
}

//Print table by taking input from user
let n = prompt("Enter number");
n = parseInt(n);
for(let i=n;i<=n*10;i=i+n)
{
    console.log(i);
}

//Nested for Loop
for(let i=1;i<=3;i++)
{
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++)
    {
        console.log(j);
    }
}

//While Loop
let i =1;
while(i<=5)
{
    console.log(i);
    i++;
}

//Break keyword
let k=1;
while(k<=5)
{
    if(k==3)
    break;
   console.log(k);
    k++;
}

//loop with Arrays
let fruits= ["mango","apple","banana","litchi"];
fruits.push("pineapple");
for(let i=0;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
}

//Nested loops with nested arrays
let heroes = [["ironman","spiderman","Thor"],
             ["superman","wonder women","flash"]];
//console.log(heroes);
    for(i=0;i<heroes.length;i++)
    {
        console.log(`List ${i}`);
        for(j=0;j<heroes[i].length;j++)
        {
            console.log(heroes[i][j]);
        }
    }

//For Of loop
for(i of fruits)
{
    console.log(i);
}

for(char of "apnacollege")
{
    console.log(char);
}

//nested for of loop
for(list of heroes)
{
    //console.log(list);
    for(i of list)
    {
        console.log(i);
    }
}
