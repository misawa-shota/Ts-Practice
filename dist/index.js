// import readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
const sequence = (start, end) => {
    const arr = [];
    for (let n = start; n <= end; n++) {
        arr.push(n);
    }
    return arr;
};
const getFizzBuzzString = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
    else if (num % 3 === 0) {
        return "Fizz";
    }
    else if (num % 5 === 0) {
        return "Buzz";
    }
    else {
        return num;
    }
};
for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
}
export {};
//# sourceMappingURL=index.js.map