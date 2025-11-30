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
const arr1: Array<number> = [4, 5, 6];

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

// 読み取り専用配列型
const arr4: readonly number[] = [1, 2, 3];
arr4[0] = 10; // エラーになる