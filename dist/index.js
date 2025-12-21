function getUserName(user) {
    if (user.tag === "human") {
        return user.name;
    }
    else {
        return "名無し";
    }
}
const tama = {
    tag: "animal",
    species: "cat",
};
const john = {
    tag: "human",
    name: "John Doe",
};
// const alien: User = {
//   tag: "alien",
//   planet: "Mars",
// }; // This should cause a TypeScript error
console.log(getUserName(tama)); // Output: "名無し"
console.log(getUserName(john)); // Output: "John Doe"
export {};
//# sourceMappingURL=index.js.map