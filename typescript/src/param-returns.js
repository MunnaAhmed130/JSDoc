/**
 *
 * @param {number} num1 - The first number
 * @param {number} [ num2 ] - The second (optional) number
 * @returns {number} The sum of both numbers
 */
function sum(num1, num2) {
    return num1 + (num2 || 0);
}

console.log(sum(2));
