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
export {};
//# sourceMappingURL=index.js.map