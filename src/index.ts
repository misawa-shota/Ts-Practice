const names = ["Alice", "Bob", "Charlie"];

type Name = (typeof names)[number];
// type Name = "Alice" | "Bob" | "Charlie"