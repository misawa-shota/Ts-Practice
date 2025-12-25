type Human = {
  type: "Human";
  name: string;
  age: number;
}

function assertHuman(value: any): asserts value is Human {
  if (value == null) {
    throw new Error("Given value is null or undefined");
  }

  if (
    value.type !== "Human" ||
    typeof value.name !== "string" ||
    typeof value.age !== "number"
  ) {
    throw new Error("Given value is not a valid Human object");
  }
}

function checkAndUserHuman(value: unknown) {
  assertHuman(value);
  const name = value.name;
  console.log(`Human's name is ${name}`);
}

const uhyo = {
  type: "Human",
  name: "uhyo",
  age: 30,
};

checkAndUserHuman(uhyo);