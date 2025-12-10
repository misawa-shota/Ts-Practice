type HasAge = {
  age: number;
};

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function getPrice(customer: HasAge) {
  if (customer instanceof User && customer.name === "uhyo") {
    return 0;
  }
  return customer.age < 18 ? 1000 : 1800;
}

const customer1: HasAge = { age: 17 };
const customer2: HasAge = { age: 20 };
const uhyo: User = new User("uhyo", 25);

console.log(getPrice(customer1)); // 1000
console.log(getPrice(customer2)); // 1800
console.log(getPrice(uhyo));      // 0