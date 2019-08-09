// ### Ask the user to enter to enter an option, then go to that option (2 points):
// Example:
// "Welcome to Kenn's program. Press 1 to count. Press 2 to use a calculator. Press q to quit".
//
// #### When selecting count by pressing 1 (2 points):
// Ask the user to count by ones.
// - If they select count by ones, ask them to enter a number.
// Start at 1 and count up to that number in the console log.
//
// #### When selecting use a calculator by pressing 2 (2 points):
// Ask the user if they want to use addition.
// - If they select 'a', ask them to enter two numbers. Give them the sum of the numbers.
var user = parseInt(prompt("Welcome to the magic Factory. Press '1' to count magic. Press '2' to use a magical calculator. Press 'q' to quit!"));

if (user === 1) {
  alert("success");
  var num1 = parseInt(prompt("Please enter a number"));
  for (var x = num1; x < 0; x++) {

  }

  alert(x);
  x++;
  console.log("Made it to the end");

} else if (user === 2) {
  var calculator = prompt("Would you like to use addition? Press 'a' bruh");

  if (calculator === 'a') {
    alert("Success AAAAA");
    var num2 = parseInt(prompt("Please enter the first number"));
    var num3 = parseInt(prompt("Please enter the second number"));
    var y = num2 + num3;
    alert("The sum of the two numbers you entered is: " + y + " ...magic...");
  }

}

// #############################################################
// var numb1 = parseInt(prompt("Enter a number bruh"));
// var numb2 = parseInt(prompt("Enter another number bruh"));
//
// for (var y = numb1; y < numb2; y++){
//   console.log(y);
// }
//
//
// var userInput = "";
// var isUserInputQ = false;
// while(isUserInputQ) {
//   userInput = prompt("You entered + " + userInput + ". Print")
// }
// alert("You pressed 'q'!!!");
// #############################################################
