type Fruit = "apple" | "orange" | "banana";

// type FruitNumbers = {
//   [P in Fruit]: number;
// };

// const numbers: FruitNumbers = {
//   apple: 5,
//   orange: 10,
//   banana: 15,
// };

// console.log(numbers);

type FruitArrays = {
  [P in Fruit]: P[];
};

const numbers: FruitArrays = {
  apple: ["apple", "apple"],
  orange: ["orange", "orange", "orange"],
  banana: ["banana"],
};

console.log(numbers);