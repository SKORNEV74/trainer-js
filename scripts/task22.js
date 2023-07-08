function calculate(arr) {
    let sum;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] += 4;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] -= 2;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 13 === 0) {
            arr.splice(i, 1);
        }
    }

    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

    return sum;
}

console.log(calculate([15, 2, 3, 5, 6]));