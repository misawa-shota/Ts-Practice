function setAge(human, age) {
    return { ...human, age };
}
const uhyo = {
    type: 'human',
    name: 'uhyo',
    age: 26,
};
const olderUhyo = setAge(uhyo, 27);
console.log(olderUhyo);
export {};
//# sourceMappingURL=index.js.map