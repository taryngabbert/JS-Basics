//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler (name) {
  if (name = "Tyler") {
  return true;
} else {
  return false;
  }
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getname(name) { debugger
  prompt("Please enter your name");
  console.log(name);
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(name) { debugger
  alert ("Welcome, " + getName(name));
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
//an argument is something that you can pass thorough to your function, using your parameters place.
// a parameter sets something to be passed into a fuction....
//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

// NaN, "", 0,  null, undefined, false

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName(name) {
  name = "Taryn";
  return name;
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName= myName(name);
//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn(name) {
  return function() {
    return name;
  }
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
