// import readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// 可変超引数の関数
// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// }
// console.log(sum(1, 10, 100)); // 111
// console.log(sum()); // 0
const sum = (base, ...args) => {
    let result = base * 1000;
    for (const num of args) {
        result += num;
    }
    return result;
};
console.log(sum(1, 10, 100)); // 1110
export {};
//# sourceMappingURL=index.js.map