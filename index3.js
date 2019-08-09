// ### Challenge <------

// ### Challenge
// - Ask the user to input the starting number when counting by ones and twos.
// - Make sure if the user enters an invalid selection say "ERROR", then retry the question.
// This should include an ERROR when a user inserts a smaller second number when counting in the above challenge.
//
// #### Notes
// - It's expected you know how to use Git to push and pull your projects. You will not get ANY points if you push your work after 5pm.
var user = parseInt(prompt("Welcome to the magic Factory. Press '1' to count magic. Press '2' to use a magical calculator. Press 'q' to quit!"));

if (user === 1) {
  alert("Welcome to level 1");
  var kount = prompt("Would you like to count by ones? Press 'y' for yes or 'n' for no ");
  if (kount === 'y') {
    var numb2 = parseInt(prompt("Enter a starting number"));
    if (numb2 = 'a') {
      // so the below alert does work if you input 'a' unfortunately i was un able to figure out the entire alphabet in time
      alert("error");
    }
    var numb1 = parseInt(prompt("Enter a ending number"));
    if (numb1 = 'a') {
      // so the below alert does work if you input 'a' unfortunately i was un able to figure out the entire alphabet in time
      alert("error");
    }

    for (var x = numb2; x <= numb1; x++){

      console.log(x);
    }
    x++;

  } else {
    var numb4 = prompt("Would you like to count by twos? Press 'y' for yes");
    var numb2 = parseInt(prompt("Enter a starting number"));
    var numb1 = parseInt(prompt("Enter a ending number"));
      for (var x = numb2; x <= numb1; x++){
        console.log(x);
        x++;
      }
      x++;
  }
}

else if (user === 2) {
  var calculator = prompt("Would you like to use addition? Press 'a' or press 'n' for no");

  if (calculator === 'a') {
    alert("Welcome to the magic calculator");
    var num2 = parseInt(prompt("Please enter the first number"));
    var num3 = parseInt(prompt("Please enter the second number"));
    var y = num2 + num3;
    alert("The sum of the two numbers you entered is: " + y + " ...magic...");
  } else {
    var calculator = prompt("Would you like to use subtraction? Press 's' or press 'n' for no ");
    var num5 = parseInt(prompt("Please enter the first number"));
    var num6 = parseInt(prompt("Please enter the second number"));
    var z = num5 - num6;
    alert("The sum of the two numbers you entered is: " + z + " ...magic...");
  }
}

else {
  alert("goodbye");
}
