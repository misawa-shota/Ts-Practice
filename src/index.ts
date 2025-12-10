class User {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

const uhyo = new User("uhyo", 26);
console.log(uhyo.name); // "uhyo"
console.log(uhyo.isAdult()); // true
console.log(uhyo.age); // Error: 'age' is private and only accessible within class 'User'.