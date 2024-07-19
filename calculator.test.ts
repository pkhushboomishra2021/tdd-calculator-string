import { add } from './calculator';

test('empty string should return 0', () => {
    expect(add("")).toBe(0);
});

test('single number should return the number itself', () => {
    expect(add("1")).toBe(1);
});

test('two numbers should return their sum', () => {
    expect(add("1,5")).toBe(6);
});

test('new lines between numbers should be handled', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('custom delimiter should be supported', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('negative numbers should throw an exception', () => {
    expect(() => add("1,-2,3")).toThrowError('negative numbers not allowed -2');
    expect(() => add("//;\n1;-2;3;-4")).toThrowError('negative numbers not allowed -2,-4');
});
