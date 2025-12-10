class User {
    static adminUser;
    static {
        this.adminUser = new User;
        this.adminUser.#age = 9999;
    }
    #age = 0;
    getAge() {
        return this.#age;
    }
    setAge(age) {
        if (age < 0 || age > 150) {
            return;
        }
        this.#age = age;
    }
}
console.log(User.adminUser.getAge()); // 9999
const uhyo = new User();
uhyo.setAge(27);
console.log(uhyo.getAge()); // 27
export {};
//# sourceMappingURL=index.js.map