import { readFile } from "fs/promises";
const sleepReject = (duration) => {
    return new Promise((_resolve, reject) => {
        setTimeout(reject, duration);
    });
};
const p = Promise.any([
    readFile("foo.txt", "utf-8"),
    readFile("bar.txt", "utf-8"),
    readFile("baz.txt", "utf-8"),
    sleepReject(1000),
]);
p.then((results) => console.log(results));
//# sourceMappingURL=index.js.map