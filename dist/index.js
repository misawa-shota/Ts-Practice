import("fs/promises")
    .then(({ readFile }) => readFile("./foo.txt", "utf-8"))
    .then((data) => console.log(data))
    .catch((err) => console.error("Error reading foo.txt:", err))
    .finally(() => {
    console.log("Finished attempting to read file.");
});
export {};
//# sourceMappingURL=index.js.map