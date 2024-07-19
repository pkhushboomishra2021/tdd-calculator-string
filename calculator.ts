
export function add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.slice(2, delimiterEnd));
        numbers = numbers.slice(delimiterEnd + 1);
    }

    const parts = numbers.split(delimiter);
    const negatives = parts.filter(num => parseInt(num, 10) < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return parts.reduce((acc, num) => acc + parseInt(num, 10), 0);
}




