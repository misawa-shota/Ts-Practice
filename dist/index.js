class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
const uhyo = new User("uhyo", 26);
console.log(uhyo.name); // "uhyo"
console.log(uhyo.isAdult()); // true
export {};
// console.log(uhyo.age); // Error: 'age' is private and only accessible within class 'User'.
//# sourceMappingURL=index.js.map