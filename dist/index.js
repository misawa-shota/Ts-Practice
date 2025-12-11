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
class PremiumUser extends User {
    rank;
    constructor(name, age, rank) {
        super(name, age);
        this.rank = rank;
    }
    isAdult() {
        return this.age >= 18;
    }
}
const jhon = new User("jhon", 15);
const uhyo = new PremiumUser("uhyo", 26, 5);
console.log(uhyo.isAdult());
console.log(jhon.isAdult());
console.log(uhyo.age); // Error: 'age' is protected and only accessible within class 'User' and its subclasses.
export {};
//# sourceMappingURL=index.js.map