import { readFile } from "fs/promises";
const p = readFile("./uhyo.txt", "utf-8");
p.then((data) => {
    console.log(data);
});
//# sourceMappingURL=index.js.map