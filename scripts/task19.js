function match (firstStr, secondStr) {
    if (firstStr.toUpperCase() === secondStr.toUpperCase()) {
        return true;
    }
}

console.log(match('hEllO', 'HELLo'));