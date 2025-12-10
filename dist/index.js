class User {
    name;
    #age;
    data;
    constructor(name, age, data) {
        this.name = name;
        this.#age = age;
        this.data = data;
    }
    isAdult() {
        return this.#age >= 20;
    }
}
const uhyo = new User("uhyo", 26, "Some data");
const data = uhyo.data;
const Jhon = new User("Jhon", 89, { num: 123 });
const data2 = Jhon.data;
const data3 = Jhon.data.num;
export {};
//# sourceMappingURL=index.js.map