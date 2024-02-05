// @ts-check

/** Class to create a person object */
class Person {
    /**
     * @param {Object} personInfo - Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name - Persons name
         */
        this.name = personInfo.name;
        /**
         * @property {string} age - Persons age
         */
        this.age = personInfo.age;
    }

    /**
     * @property {Function} greet - A greeting with the name and age
     * @returns {string}
     */
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age}`;
    }
}

/**
 * See {@link Person}
 */
const person1 = new Person({
    name: "John Doe",
    age: 30,
});
console.log(person1.greet());
