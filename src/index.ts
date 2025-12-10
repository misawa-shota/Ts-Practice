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

// function map (array: number[], callback:(num: number) => number): number[] {
//   const arr: number[] = [];
//   for (const item of array) {
//     arr.push(callback(item));
//   }
//   return arr;
// }

// ジェネリクスを使ったバージョン
function map<T, U>(array: T[], callback: (item: T) => U): U[] {
  const arr: U[] = [];
  for (const item of array) {
    arr.push(callback(item));
  }
  return arr;
}

const data = [1, 1, 2, 3, 5, 8, 13];
const result = map(data, (x) => x * 10);
console.log(result); // [10, 10, 20, 30, 50, 80, 130]