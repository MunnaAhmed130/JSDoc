// @ts-check

/** a random text
 * @type {string}
 */
let text = "Hello World";

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

/** adds 2 numbers
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

/** calaulate tax amount
 * @param {number} amount - Total amount
 * @param {number} tax  - Tax percentage
 * @returns {string} - Total with a dollar($) sign
 */
function calculateTax(amount, tax) {
    return `$${amount + tax * amount}`;
}

let value = calculateTax(2000, 4);

// custom type/ type def/definition
/** A student
 * @typedef {object} Student
 * @property {number} id - student id
 * @property {string} name - student name
 * @property {string|number} [age] - student age (optional)
 * @property {boolean} isActive - student is active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: "John Doe",
    age: 20,
    isActive: true,
};
