// import readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
const toLowerOrUpper = (str, upper) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper("Hello World"));
console.log(toLowerOrUpper("Hello World", true));
console.log(toLowerOrUpper("Hello World", false));
export {};
//# sourceMappingURL=index.js.map