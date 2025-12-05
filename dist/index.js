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
const calcBmi = ({ height, weight }) => weight / height ** 2;
const uhyo = {
    height: 1.75,
    weight: 60,
};
console.log(calcBmi(uhyo));
export {};
//# sourceMappingURL=index.js.map