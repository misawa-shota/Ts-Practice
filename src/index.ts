type Animal = {
  species: string;
  age: number;
}

type Human = Animal & {
  name: string;
}

const tama: Animal = {
  species: "cat",
  age: 3,
};

const uhyo: Human = {
  species: "human",
  name: "uhyo",
  age: 26,
};