// import readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
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
    double(num) {
        return num * 2;
    },
    double2: (num) => num * 2,
};
console.log(obj.double(10));
console.log(obj.double2(-50));
export {};
//# sourceMappingURL=index.js.map