/**
 * Function to check if a number is an Armstrong number.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is an Armstrong number, false otherwise.
 */
function isArmstrongNumber(num) {
    // Convert the number to string.
    const digits = num.toString().split('');
    // Find the length of the digit.
    const numberOfDigits = digits.length;
    const sumOfPowers = digits.reduce((sum, digit) => {
        return sum + Math.pow(parseInt(digit), numberOfDigits);
    }, 0);
    // If the given number is armstrong number return true.
    return sumOfPowers === num;
}

/**
 * Function to check if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is a prime number, false otherwise.
 */
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

module.exports = { isArmstrongNumber, isPrime };
