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
// function calcBmi(human: Human): number {
//   return human.weight / human.height ** 2;
// }

// const uhyo: Human = {
//   height: 1.75,
//   weight: 60,
// };

// console.log(calcBmi(uhyo));

//　分割代入
// function calcBmi({height, weight}: Human): number {
//   return weight / height ** 2;
// }

// const uhyo: Human = {
//   height: 1.75,
//   weight: 60,
// };

// console.log(calcBmi(uhyo));

// const関数式
// const calcBmi = function({height, weight}: Human): number {
//   return weight / height ** 2;
// };

// const uhyo: Human = {
//   height: 1.75,
//   weight: 60, 
// };

// console.log(calcBmi(uhyo));

// アロー関数式
// const calcBmi = ({height, weight}: Human): number => {
//   return weight / height ** 2;
// };

// const uhyo: Human = {
//   height: 1.75,
//   weight: 60, 
// };

// console.log(calcBmi(uhyo));

// アロー関数式 省略形
// const calcBmi = ({height, weight}: Human): number =>  weight / height ** 2;

// const uhyo: Human = {
//   height: 1.75,
//   weight: 60, 
// };

// console.log(calcBmi(uhyo));

// メソッド記法
const obj = {
  double(num: number): number {
    return num * 2;
  },
  double2: (num: number): number => num * 2,
};

console.log(obj.double(10));
console.log(obj.double2(-50));