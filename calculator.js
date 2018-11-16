
    /*0. Start by reading through the HTML and the code that is here, to get a sense
    for the outline of what is happening.  What are the variables you'll be
    keeping track of?  What are the functions supposed to do?*/
    var num1;
    var num2;
    var operationSelected; /* Will have a value like "multiplication" or "addition" */

    /*When an operation (+ or *) is selected, this function changes the colors
    to highlight the selection in darker red, and sets the operationSelected
    variable to either "multiplication" or "addition"*/
    function selectOperation(op) {
      /*op comes from "this", so op refers to what "this" refers to in the html below,
      that is, it refers to the button that is being clicked to trigger this event */

      /*This next bit is new!  We are getting elements based on class name instead of id*/
      /*It also makes life more complicated, because now we don't get one
      element but rather an ARRAY of elements */
      var buttons = document.getElementsByClassName("operation");

      /* A "for" loop lets us repeat an item of code.  This loop will
      run as many times as the array of buttons has length.  Each time the
      variable i will increase by 1 (that is what i++ does), and we will use
      it as an INDEX in the array.
      */

      /*buttons[i] will give the ith button in the array */
      for (var i=0; i< buttons.length; i++){
          buttons[i].style.backgroundColor = "rgba(255,0,0,0.2)"; /* 1. modify this line so that it changes the backgroundColor of buttons[i] to be "rgba(255,0,0,0.2)"*/
      }
      /*2. Add a line here to the background color of the currently selected button to be red.  This is where the "op" parameter comes in handy */
       op.style.backgroundColor="red";
      /*3. Set operationSelected appropriately.  You can find the id of an html element with
      <element name>.getAttribute('id');  What should you use for <element name>?*/
      operationSelected=op.getAttribute("id");
    }

    function calculate(){
      num1 = document.getElementById("firstNum").value;
      num2 = document.getElementById("secondNum").value; /*You can use the .value property to get text entered in a form */

      var result = 0;
      if (operationSelected=="addition") { /*This line checks if the operationSelected variable matches "addition" and runs the code inside if it does */
      result = Number(num1) + Number(num2);
        /* 4. Check out what this line does.  It's not working quite right as is.
        That's because it's treating num1 and num2 like strings (words/text) rather than like numbers
        You can *make* JavaScript treat something like a number by using something like Number(num1) instead of num1
        Try it! */

      }
      /* 5. Add an 'else if' here with code inside it to respond to multiplication*/
      else if (operationSelected=="multiplication"){
      result = Number(num1) * Number(num2);
      }

      else if (operationSelected=="division"){
        result = Number(num1)/ Number (num2);
      }
      else if (operationSelected=="subtraction"){
      result = Number(num1) - Number(num2);
      }
      document.getElementById("Result").innerHTML=result;
      /*6. Add code to put the result in the innerHTML of the correct element below, using
      an id in your html */

      /* 7.  Put your javascript in a separate file and link it with script tags in the last line of the body

      /*8.  How did it go!?  Check in with those around you and take plenty of time to  make sure
      everyone is understanding each piece.  This is an important part of the lab. */

      /*9.  Extensions:  All done? Try using more CSS to make the page look nicer,
      and/or expand the capabilities of your calculator with more operations. What else
      can think of that would improve the page?
      */
    }
