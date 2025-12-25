function assertHuman(value) {
    if (value == null) {
        throw new Error("Given value is null or undefined");
    }
    if (value.type !== "Human" ||
        typeof value.name !== "string" ||
        typeof value.age !== "number") {
        throw new Error("Given value is not a valid Human object");
    }
}
function checkAndUserHuman(value) {
    assertHuman(value);
    const name = value.name;
    console.log(`Human's name is ${name}`);
}
const uhyo = {
    type: "Human",
    name: "uhyo",
    age: 30,
};
checkAndUserHuman(uhyo);
export {};
//# sourceMappingURL=index.js.map