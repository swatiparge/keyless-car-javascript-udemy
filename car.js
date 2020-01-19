function checkDriverAge(){
  alert("You want to Drive a Car? But Are you eligible? Let's Check it Out!");
  var age = 18;
  var eligible = prompt("How old Are You?");
  if (eligible > age)
  {
    alert("Powering On. Enjoy the ride!");
  } else if (eligible < age){
    alert("Sorry, you are too young to drive this car. Powering off");
  }
  else{
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}
checkDriverAge();

function checkDriverAge2(age){
  var age;
  if (age > 18)
  {
    return ("Powering On. Enjoy the ride!");
  } else if (age < 18){
    return ("Sorry, you are too young to drive this car. Powering off");
  }
  else{
    return ("Congratulations on your first year of driving. Enjoy the ride!");
  }
}
checkDriverAge2();
