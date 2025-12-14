function getName(human) {
    return human.name;
}
function getSpecies(animal) {
    return animal.species;
}
const mysteryFunc = Math.random() > 0.5 ? getName : getSpecies;
const uhyo = {
    name: "uhyo",
    species: "cat"
};
const value = mysteryFunc(uhyo);
console.log(value);
export {};
//# sourceMappingURL=index.js.map