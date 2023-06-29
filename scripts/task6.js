let legA = +prompt("leg A:");
let legB = +prompt("leg B:");
let hypotenuseC = +prompt("hypotenuse C:");

let condition = Math.pow(legA, 2) + Math.pow(legB, 2) === Math.pow(hypotenuseC, 2);

let answer = (condition) ? "Это прямоугольный треугольник!" : "Это не прямоугольный треугольник!";

alert(answer);