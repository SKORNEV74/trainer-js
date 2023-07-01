// Функции должны принимать аргументы.

function createAdder(a) {
    return function addA(b) {
        return a + b;
    }
}

const add5 = createAdder(5);
alert( add5(5) ) // Должно получиться 10
alert( add5(12) ) // Должно получиться 17