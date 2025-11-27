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

type User = {
  name: string;
  age: number;
};

const obj = {
  name: "名無し",
  age: 20,
  telnumber: "090-1234-5678",
};

const u:User = obj;