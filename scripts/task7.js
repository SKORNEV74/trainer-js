let num1 = +prompt("first number:");
let num2 = +prompt("second number:");
let num3 = +prompt("third number:");

let max;

if (num1 >= num2) {
    if (num1 >= num3) {
        max = num1;
    } else {
        max = num3;
    }
} else {
    if (num2 >= num3) {
        max = num2;
    } else {
        max = num3;
    }
}

alert(max);