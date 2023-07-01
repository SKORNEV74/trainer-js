function repeatWord (word, count) {
    let answer = '';

    for (let i = 1; i <= count; i++) {
        if (i === count) {
            answer += `${word + i}`;
        } else {
            answer += `${word + i}, `;
        }
    }

    return answer;
}

console.log(repeatWord('слово', 3));