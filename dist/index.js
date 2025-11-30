// import readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// const rl = readline.createInterface({
//   input,
//   output
// });
// (async () => {
//   const input = await rl.question('名前を入力してください:');
//   const name = input ? input : "名無し";
//   const user = {
//     name,
//     age: 20,
//   };
//   console.log(user);
//   rl.close();
// })();
// for-of文で配列をループ
const arr = [10, 20, 30];
for (const num of arr) {
    console.log(num);
}
// タプル型による型指定
const tuple = ['TypeScript', 2024, true];
console.log(tuple);
const str = tuple[0];
const num = tuple[1];
const bool = tuple[2];
console.log(str);
console.log(num);
console.log(bool);
const nothing = tuple[3]; // undefined
console.log(nothing);
export {};
//# sourceMappingURL=index.js.map