class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }

  setAge(newAge: number) {
    this.age = newAge;
  }
}

const uhyo = new User("uhyo", 26);
const taro = new User("taro", 15);

console.log(uhyo);
console.log(taro);
console.log(uhyo.isAdult()); // true
console.log(taro.isAdult()); // false

