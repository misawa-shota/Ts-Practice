import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({
  input,
  output
});

(async () => {
  const input = await rl.question('名前を入力してください:');
  const name = input ? input : "名無し";
  const user = {
    name,
    age: 20,
  };
  console.log(user);
  rl.close();
})();