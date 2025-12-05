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
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

// console.log(data);
const users: User[] = [];
const lines: string[] = data.trim().split('\n');
// console.log(lines);

for (const line of lines) {
  const [name = '名無し', ageStr = '0', premiumUserStr = '0'] = line.split(',');
  const user: User = {
    name: name,
    age: parseInt(ageStr, 10),
    premiumUser: premiumUserStr === '1',
  };
  users.push(user);
}

// console.log(users);

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})さんはプレミアムユーザーです。`);
  } else {
    console.log(`${user.name} (${user.age})さんはプレミアムユーザーではありません。`);
  }
}