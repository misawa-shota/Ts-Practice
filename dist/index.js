function useToString1(value) {
    console.log(`value is ${value.toString()}`);
}
useToString1({
    toString() {
        return "foo!";
    }
});
useToString1(3.14);
export {};
//# sourceMappingURL=index.js.map