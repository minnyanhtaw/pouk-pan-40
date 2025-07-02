function diff(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

// console.log(diff(10, 20));
// console.log(diff(30, 20));

function howManyArgs(...arguments) {
  console.log(arguments.length);
}

// howManyArgs("hi", 2); //2
// howManyArgs(); //0
// howManyArgs(12);

function doAdd(...arguments) {
  if (arguments.length === 1) {
    console.log(arguments[0] + 10);
  } else if (arguments.length === 2) {
    console.log(arguments[0] + arguments[1]);
  } else if (arguments.length === 3) {
    console.log(arguments[0] + arguments[1] + arguments[2]);
  }
}

doAdd(10);
doAdd(10, 20);
doAdd(10, 20, 30);
