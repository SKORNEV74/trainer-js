function transformUpVotes(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('.') === -1) {
            arr[i] = arr[i].replace(/k/, '000');
        } else {
            arr[i] = arr[i].replace('.', '');
            arr[i] = arr[i].replace(/k/, '00');
        }

        arr[i] = +arr[i];
    }

    return arr;
}

console.log(transformUpVotes(['10k', '2.3k', '5k', '32', '28.4k']));