// @ts-check

/** a random text
 * @type {string}
 */
const text = "Hello World";

/** Array of grades
 * @type {Array<number>}
 */
const grades = [83, 92, 74];

/** User object
 * @type {{id: number|string, name: string}}
 */
const user = {
    id: "1",
    name: "adam",
};

/** This function adds 2 numbers and returns a number
 * @param {number} num1 - any number
 * @param {number} num2 - any number
 * @returns {number} - the sum of 2 numbers
 */
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

add(1, 2);
console.log(text);

// console.log(text);
// console.log(text);
// console.log(text);
