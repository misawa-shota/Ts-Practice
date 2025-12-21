const mmConversionTable = {
    mm: 1,
    cm: 1e2,
    m: 1e3,
    km: 1e6,
};
function converUnits(value, unit) {
    console.log(unit);
    const mmValue = value * mmConversionTable[unit];
    return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6,
    };
}
console.log(converUnits(100, "cm")); // { mm: 1500, m: 1.5, km: 0.0015 }
export {};
//# sourceMappingURL=index.js.map