type NumberAndStrings = [number, ...string[]];

const arr1: NumberAndStrings = [42, "hello", "world"];
const arr2: NumberAndStrings = [7];

// error examples
// const arr3: NumberAndStrings = []; // Error: Tuple type '[number, ...string[]]' of length '1' has no element at index '0'.
// const arr4: NumberAndStrings = ["not a number", "hello"]; // Error: Type 'string' is not assignable to type 'number'.