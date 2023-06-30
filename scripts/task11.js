let baseNum = 10;
let userNum = +prompt(`Введите ${baseNum}`);

while (baseNum < 100) {
    if (userNum === baseNum) {
        baseNum *= 2;
        userNum = +prompt(`Введите ${baseNum}`);
    } else {
        userNum = +prompt(`Введите ${baseNum}`);
    }
}

alert("Спасибо!");