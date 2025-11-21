import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({
    input,
    output
});
(async () => {
    const name = await rl.question('名前を入力してください:');
    const displayName = name ?? "名無し";
    console.log(`こんにちは、${displayName}さん！`);
    rl.close();
})();
//# sourceMappingURL=index.js.map