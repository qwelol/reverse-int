module.exports = function reverse(n) {
    let result = 0;
    let number = Math.abs(n);
    while (number > 0) {
        result = result * 10 + (number % 10);
        number = (number - (number % 10)) / 10;
    }
    return result;
};
