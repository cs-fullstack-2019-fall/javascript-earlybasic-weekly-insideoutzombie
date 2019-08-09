// ### Phase 1 <-------

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
  alert("Welcome to level 1");
  var kount = prompt("Would you like to count by ones? Press 'y' of yes ");
  if (kount === 'y') {
    var numb1 = parseInt(prompt("Enter a number bruh"));

    for (var x = 1; x <= numb1; x++){
      console.log(x);
    }
    x++;
  }
}

else if (user === 2) {
  var calculator = prompt("Would you like to use addition? Press 'a' bruh");

  if (calculator === 'a') {
    alert("Welcome to the magic calculator");
    var num2 = parseInt(prompt("Please enter the first number"));
    var num3 = parseInt(prompt("Please enter the second number"));
    var y = num2 + num3;
    alert("The sum of the two numbers you entered is: " + y + " ...magic...");
  }
} else {
  alert("goodbye");
}
