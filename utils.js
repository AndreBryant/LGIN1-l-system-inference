export function countChar(char, str) {
    let count = 0;
    for (const x of str) {
        if (x === char) {
            count++;
        }
    }
    return count;
}

export function isConstant(y) {
    return !Boolean(y.toUpperCase().match(/[A-Z]+/g))
}

export function log10(x) {
    return Math.log(x) / Math.log(10);
}

export function applySucc(str, succ, pre) {
    let result = '';
    for (const char of str) {
        if (char === pre) {
            result += succ;
        } else {
            result += char;
        }
    }
    return result;
}
