/*  todos will be an array of objects, each with a 'name' and a 'done' key.
So, each element of the array will look something like {name: 'Run', done: false}
*/
var todos=[];

/* Gets the current date and diplays it above the todo list */
function setDate(){
    var months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    var todaysDate = new Date(); /* This line will set todaysDate to be the current date/time */
    var formattedDate;
    formattedDate = months[todaysDate.getMonth()];
    formattedDate += " ";
    formattedDate += todaysDate.getDate();
    formattedDate += ", ";
    formattedDate += todaysDate.getFullYear();
    formattedDate += " ";
    formattedDate += days[todaysDate.getDay()];
    /* 3.  Your task is to make this date format nicely so it displays like "October 23, 2018",
    and will show up in the appropriate spot. Write some code to make formattedDate look like this.
    The methods on p.137 will be helpful here*/

    document.getElementById('date').innerHTML = formattedDate;
}

/* 4. Figure out what this function's job is an write a descriptive comment here */
/* It stores what you type in the variable and pushes the item to the end of the array */
function addItemPrompt(){
  var itemName = prompt("What would you like to do today?");
  /* When you type something into the prompt, it will be stored in the variable itemName */
  if (itemName) {
    todos.push({"name": itemName, "done": false}); /*push adds an item to the end of an array*/
    console.log(todos); /* This line is just for debugging.  You can erase it at the end.  But, it will allow you
    to see todos in the console, which can be helpful.*/
    putTextInTable();
  }
}

/*When the user clicks a check box, set the done value to the opposite of what, change the
done value in todos to the opposite of what it was, and change the look of the table appropriately */
function checkTheBox(thisTD){
  console.log("box checked!");
  thisTD.innerHTML= "<i class='far fa-check-square'></i>";
  /* 5. Set the thisTD.innerHTML to be a checked square (find an appropriate icon on fontawesome)
  and add the html tags to include it.  You don't need to add another link in the head.
  (Note: This line will end up being redundant with code you write later, but you
  should write it now and make sure that the box is checked when you click it to
  make sure you're on track so far) */



  var index = thisTD.parentElement.rowIndex;
  /*Gets the number of the row;*/

  if (todos[index].done){
         /*This code only runs if todos[index] has a "done" value of "true" */
         todos[index].done = false; /* In that case we set it to false, to uncheck the box */
  }
  else {
  todos[index].done= true;
  }

  /* 6.  Add an else so that if todos[index] has a done value of false, it is set to true;
  Note, you can actually do everything that this if/else statement does in just one line
  of code, but for clarity and learning, we're using a longer set of instructions.
  */

  putTextInTable();
}


function putTextInTable(){
  var toDoList = document.getElementById("toDoList");
  toDoList.innerHTML= "";

  for (var i = 0; i < todos.length; i++){
    var itemNode = document.createTextNode(todos[i].name);
    var newRow = document.createElement('tr');
    var itemTD = document.createElement('td');
    /* 7.  Make a variable for a new td called itemTd, following the model of the previous line */


    /*8. Use the appendChild method (several times) to attach the itemNode, itemNode, and itemTd to eachother
    appropriately and to attach them to the toDoListTable.*/
    toDoList.appendChild(newRow);
    newRow.appendChild(itemTD);
    itemTD.appendChild(itemNode);
    /*9. Add an if statement here so that this line runs only if the "done" key of todos[i] has a value of true*/
    if(todos[i].done==true)
      newRow.innerHTML+= "<td onclick='checkTheBox(this)'><i class='far fa-check-square' class='checkbox'></i></td>";
    /*10 Complete the else statement below to show an unchecked box if todos[i] has a value of true
    }*/
    else{
      newRow.innerHTML+= "<td onclick='checkTheBox(this)'><i class='far fa-square' class='checkbox'></i></td>";
    }
}
}
function setBackground(){

    var myRandomNumber=Math.floor(Math.random()*3);

    if (myRandomNumber==0){
      document.body.style.backgroundImage="url('background0.jpg')"; /* Image from Unsplash.com Artist: Anda Samsuwan*/
    }
    if (myRandomNumber==1){
      document.body.style.backgroundImage="url('background1.jpg')";/* Image from Unsplash.com Artist: Humberto Chavez*/
    }
    if (myRandomNumber==2){
        document.body.style.backgroundImage="url('background2.jpg')";/* Image from Unsplash.com Artist: Evan Kirby*/
    }
    if (myRandomNumber==3){
        document.body.style.backgroundImage="url('background3.jpg')";/* Image from Unsplash.com Artist: Laura Pluth*/
    } /* Worked with Dr. Knudson on Code */

}
