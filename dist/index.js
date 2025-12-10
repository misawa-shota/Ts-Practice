class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function getPrice(customer) {
    if (customer instanceof User && customer.name === "uhyo") {
        return 0;
    }
    return customer.age < 18 ? 1000 : 1800;
}
const customer1 = { age: 17 };
const customer2 = { age: 20 };
const uhyo = new User("uhyo", 25);
console.log(getPrice(customer1)); // 1000
console.log(getPrice(customer2)); // 1800
console.log(getPrice(uhyo)); // 0
export {};
//# sourceMappingURL=index.js.map