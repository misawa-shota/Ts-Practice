type Animal = {
  tag: "animal";
  species: string;
};

type Human = {
  tag: "human";
  name: string;
};

type User = Animal | Human;

function getUserName(user: User) {
  if (user.tag === "human") {
    return user.name;
  } else {
    return "名無し";
  }
}

const tama: User = {
  tag: "animal",
  species: "cat",
};

const john: User = {
  tag: "human",
  name: "John Doe",
};

// const alien: User = {
//   tag: "alien",
//   planet: "Mars",
// }; // This should cause a TypeScript error

console.log(getUserName(tama)); // Output: "名無し"
console.log(getUserName(john)); // Output: "John Doe"