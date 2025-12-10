class User {
  name: string;
  age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

class PremiumUser extends User {
  rank: number;

  constructor (name: string, rank: number) {
    super(name, 100);
    this.rank = rank;
  }

  public override isAdult(): boolean {
    return true;
  }
}

function getMessage(u: User): string {
  return `こんにちは、${u.name}さん！`;
}

const jhon = new User("jhon", 15);
const uhyo = new PremiumUser("uhyo", 5);
console.log(getMessage(uhyo)); // "こんにちは、uhyoさん！"
console.log(getMessage(jhon)); // "こんにちは、jhonさん！"

console.log(uhyo.name); // "uhyo"
console.log(uhyo.age); // 26
console.log(uhyo.rank); // 5