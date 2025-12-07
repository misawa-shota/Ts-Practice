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
// ジェネリックス
// function repeat<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }
// console.log(repeat<string>('hello', 3));
// console.log(repeat<number>(123, 3));
// console.log(repeat<boolean>(true, 3));
// const repeat = function<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }
// console.log(repeat<string>('hello', 3));
// console.log(repeat<number>(123, 3));
// console.log(repeat<boolean>(true, 3));
// const repeat = <T>(element: T, length: number): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }
// console.log(repeat<string>('hello', 3));
// console.log(repeat<number>(123, 3));
// console.log(repeat<boolean>(true, 3));
// const utils = {
//   repeat<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//       result.push(element);
//     }
//     return result;
//   }
// }
// console.log(utils.repeat<string>('hello', 3));
// console.log(utils.repeat<number>(123, 3));
// console.log(utils.repeat<boolean>(true, 3));
// const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];
// console.log(pair<string, number>('hello', 123));
// console.log(pair<boolean, string>(true, 'world'));
// const repeat = <T extends {
//   name: string;
// }>(element: T, length: number): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }
// type HasNameAndAge = {
//   name: string;
//   age: number;
// };
// const obj: HasNameAndAge = {
//   name: 'Alice',
//   age: 30,
// };
// console.log(repeat<HasNameAndAge>(obj, 3));
function repeat(element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
console.log(repeat('hello', 3));
export {};
//# sourceMappingURL=index.js.map