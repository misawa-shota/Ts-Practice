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
    constructor(name, rank) {
        super(name, 100);
        this.rank = rank;
    }
}
function getMessage(u) {
    return `こんにちは、${u.name}さん！`;
}
const jhon = new User("jhon", 15);
const uhyo = new PremiumUser("uhyo", 5);
console.log(getMessage(uhyo)); // "こんにちは、uhyoさん！"
console.log(getMessage(jhon)); // "こんにちは、jhonさん！"
console.log(uhyo.name); // "uhyo"
console.log(uhyo.age); // 26
console.log(uhyo.rank); // 5
export {};
//# sourceMappingURL=index.js.map