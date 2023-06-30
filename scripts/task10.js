let userNum = +prompt("Enter your number:");
let result = 0;

while (userNum !== 0) {
    userNum = +prompt("Enter your number:");
    result += userNum;
}

alert(result);