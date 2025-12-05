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

type Human = {
  height: number;
  weight: number;
};

// function関数式
function calcBmi(human: Human): number {
  return human.weight / human.height ** 2;
}

const uhyo: Human = {
  height: 1.75,
  weight: 60,
};

console.log(calcBmi(uhyo));