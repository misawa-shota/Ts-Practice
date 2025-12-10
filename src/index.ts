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

type FizzBuzzString = (num: number) => string | number;
type Sequence = (start: number, end: number) => number[];

const sequence: Sequence = (start: number, end: number): number[] => {
  const arr: number[] = [];
  for (let n = start; n <= end; n++) {
    arr.push(n);
  }
  return arr;
}

const getFizzBuzzString: FizzBuzzString = (num: number): string | number => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}