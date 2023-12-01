// https://adventofcode.com/2023/day/1


const calibration = (string) => {
    let total = 0;
    const lines = string.split('\n');
    lines.forEach(line => total = total + Number(leftDigit(line) + rightDigit(line)));
    return total;
}

const leftDigit = (str) => {
    if (str.length === 0) return 0
    if (!isNaN(Number(str[0]))) return str[0]
    return leftDigit(str.slice(1));   
}

const rightDigit = (str) => {
    if (str.length === 0) return 0
    if (!isNaN(Number(str[str.length - 1]))) return str[str.length - 1]
    return rightDigit(str.slice(0, str.length - 1)); 
}

// const test = `
// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// `;

// console.log(calibration(test))