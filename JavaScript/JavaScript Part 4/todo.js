let todo = [];
let req = prompt("Please enter your request");
console.log(req);

while(true)
{
    if(req=="quit")
    {
      console.log("quitting app");
      break;
    }
    if(req=="list")
    {
        for(let i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
    }
    else if(req=="add")
    {
       let task = prompt("Please enter the task you want to add");
       todo.push(task);
       console.log("task added");
    }
    else if(req=="delete")
    {
       let idx = prompt("please enter the task index");
       todo.splice(idx,1);
       console.log("Task deleted");
    }
    //Corner case - agar user ne quit,list, add, delete ke alawa kuchh or dawaya to
    else
    {
        console.log("Wrong request");
    }
    req = prompt("Please enter your request");
}