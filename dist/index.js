class User {
    name;
    #age;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    isAdult() {
        return this.#age >= 20;
    }
}
class PremiumUser extends User {
    rank = 1;
}
function getMessage(u) {
    return `こんにちは、${u.name}さん！`;
}
const jhon = new User("jhon", 15);
const uhyo = new PremiumUser("uhyo", 26);
console.log(getMessage(uhyo)); // "こんにちは、uhyoさん！"
console.log(getMessage(jhon)); // "こんにちは、jhonさん！"
console.log(uhyo.rank); // 1
console.log(uhyo.name); // "uhyo"
console.log(uhyo.isAdult()); // true
export {};
//# sourceMappingURL=index.js.map