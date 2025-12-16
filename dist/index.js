function signNumber(type) {
    return type === "plus" ? 1 : -1;
}
console.log(signNumber("plus"));
console.log(signNumber("minus"));
console.log(signNumber("zero")); // Error: Argument of type '"zero"' is not assignable to parameter of type '"plus" | "minus"'.
export {};
//# sourceMappingURL=index.js.map