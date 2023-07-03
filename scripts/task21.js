function reverseAndNegate(arr) {
    let reverseArr = [];
    let j = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr[j] = -arr[i];
        j++;
    }

    return reverseArr;
}

console.log(reverseAndNegate([1, -2, 5, 4]));