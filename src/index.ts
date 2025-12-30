import { readFile } from "fs/promises";

const sleepReject = (duration: number) => {
  return new Promise<never>((_resolve, reject) => {
    setTimeout(reject, duration);
  });
};

const p = Promise.allSettled([
  readFile("foo.txt", "utf-8"),
  readFile("bar.txt", "utf-8"),
  readFile("baz.txt", "utf-8"),
  sleepReject(1000),
]);

p.then((results) => console.log(results));