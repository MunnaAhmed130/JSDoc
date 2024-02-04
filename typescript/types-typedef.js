/**
 * @type {*}
 */
let a = 2;

/**
 * @type {string}
 */
let message = "Hello World!";

/**
 * @type {number}
 */
let count = 1;

// Array<number>/number[]
/**
 * @type {number[]}
 */
let numbers = [1, 2, 3];

/**
 * @type {{message: string, count: number, numbers: number[] }}
 */
let collection = {
    message: "Hello World!",
    count: 1,
    numbers: [1, 2, 3],
};

/**
 *
 * @typedef {Object} BlogArticle
 * @property {string} title - The title of the article
 * @property {string} author - The author of the article
 * @property {string} content - The content of the article
 * @property {Date} datePublished - The date of the article was published
 */

/**
 * @type {BlogArticle}
 */
const article = {
    title: "JSDoc vs Typescript",
    author: "Rich harrison",
    content: "lorem ipsum",
    datePublished: new Date(),
};

/**
 * @type {string|number}
 */
let stringOrNumber = "string";

/**
 * @typedef {string|number} StringOrNumber
 */

/**
 * @type {StringOrNumber}
 */
let myVariable = 2;
