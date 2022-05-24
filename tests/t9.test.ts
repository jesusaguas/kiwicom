import allT9 from "../utils/t9";

test('empty string', () => {
    expect(allT9("")).toEqual([]);
});

test('not a number value', () => {
    expect(allT9("agTp€#.")).toEqual([]);
});

test('not a number and numbers', () => {
    expect(allT9("agTp€#.342")).toEqual([]);
});

test('single number', () => {
    expect(allT9("2")).toEqual(["a","b","c"]);
});

test('multiple number', () => {
    expect(allT9("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
});

test('0 and 1', () => {
    expect(allT9("0010")).toEqual(["    "]);
});