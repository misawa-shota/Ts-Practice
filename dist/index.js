class User {
    static adminName = "uhyo";
    static getAdminUser() {
        return new User(User.adminName, 26);
    }
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
console.log(User.adminName); // "uhyo"
const admin = User.getAdminUser();
console.log(admin.name); // "uhyo"
console.log(admin.age); // 26
const uhyo = new User("uhyo", 26);
console.log(uhyo.adminName); // Error: Property 'adminName' does not exist on type 'User'.
export {};
//# sourceMappingURL=index.js.map