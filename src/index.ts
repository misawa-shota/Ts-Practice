class User {
  name: string;
  protected age: number;

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

  constructor (name: string, age: number, rank: number) {
    super(name, age);
    this.rank = rank;
  }

  public override isAdult(): boolean {
    return this.age >= 18;
  }
}

const jhon = new User("jhon", 15);
const uhyo = new PremiumUser("uhyo", 26, 5);

console.log(uhyo.isAdult());
console.log(jhon.isAdult());
console.log(uhyo.age); // Error: 'age' is protected and only accessible within class 'User' and its subclasses.