function makeKey(userName) {
    return `user:${userName}`;
}
const uhyoKey = makeKey("uhyo");
function fromKey(key) {
    return key.slice(5);
}
const user = fromKey("user:uhyo");
export {};
//# sourceMappingURL=index.js.map