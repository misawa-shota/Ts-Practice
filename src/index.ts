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
type toLowerOrUpper = (
  str: string,
  upper?: boolean | undefined,
) => string;

const toLowerOrUpper: toLowerOrUpper = (str: string, upper?: boolean) => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

console.log(toLowerOrUpper("Hello World"));
console.log(toLowerOrUpper("Hello World", true));
console.log(toLowerOrUpper("Hello World", false));