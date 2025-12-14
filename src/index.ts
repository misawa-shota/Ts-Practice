type Animal = {
  species: string;
}

type Human = {
  name: string;
  age?: number
}

type User = Animal | Human;

const uhyo: User = {
  name: "uhyo",
  age: 26,
};

const jhon: User = {
  name: "Jhon Smith",
}