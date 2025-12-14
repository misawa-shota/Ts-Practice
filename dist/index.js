function createUser(name, age) {
    return (message) => `${name} (${age}) 「${message}」`;
}
const getMessage = createUser("uhyo", 26);
console.log(getMessage("こんにちは"));
export {};
//# sourceMappingURL=index.js.map