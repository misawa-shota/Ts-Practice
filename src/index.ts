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

const arr: number[] = [1, 2, 3];

// エラーになる
const arr2: number[] = [1, "string", 3];

// 複雑な配列の型注釈
const arr3: Array<{
  name: string;
}> = [
  { name: "Alice" },
  { name: "Bob" },
];

console.log(arr);
console.log(arr2);
console.log(arr3);