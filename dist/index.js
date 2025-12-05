// import readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
const data = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;
// console.log(data);
const users = [];
const lines = data.trim().split('\n');
// console.log(lines);
for (const line of lines) {
    const [name = '名無し', ageStr = '0', premiumUserStr = '0'] = line.split(',');
    const user = {
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
    }
    else {
        console.log(`${user.name} (${user.age})さんはプレミアムユーザーではありません。`);
    }
}
export {};
//# sourceMappingURL=index.js.map