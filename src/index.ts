import { readFile } from "fs/promises";

readFile("./foo.txt", "utf-8")
  .catch((err) => {
    console.log("Error occurred:", err);
  })
  .then((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("Finished attempting to read file.");
  });