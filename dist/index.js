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
    setAge(newAge) {
        this.age = newAge;
    }
}
const uhyo = new User("uhyo", 26);
const taro = new User("taro", 15);
console.log(uhyo);
console.log(taro);
console.log(uhyo.isAdult()); // true
console.log(taro.isAdult()); // false
export {};
//# sourceMappingURL=index.js.map