import { readFile } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const filePath = fileURLToPath(import.meta.url);
const dirPath = path.dirname(filePath);
const targetPath = path.join(dirPath, "../uhyo.txt");
console.log(filePath);
console.log(dirPath);
console.log(targetPath);
readFile(targetPath, "utf-8", (err, data) => {
    let count = 0;
    let currentIndex = 0;
    if (data) {
        while (true) {
            const nextIndex = data.indexOf("uhyo", currentIndex);
            if (nextIndex >= 0) {
                count++;
                currentIndex = nextIndex + 1;
            }
            else {
                break;
            }
        }
    }
    else {
        console.log(err);
    }
    console.log(count);
});
//# sourceMappingURL=index.js.map