function useMaybeHuman(human) {
    const age = human?.age;
    console.log(age);
}
function useTime(getTimeFunc) {
    const timeOrUndefined = getTimeFunc?.();
}
export {};
//# sourceMappingURL=index.js.map