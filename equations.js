import { log10 } from "./utils.js"

//Eq 3 from Nakano & Yamada (2010)
export function eq3(x) {
    let n, a;
    for (n = x; n > 0; n--) {
        a = Math.round(Math.pow(10,log10(x)/n));
        a = isNaN(a) ? 1 : a;
        if (Math.pow(a,n) === x && n != 1) {
            return {a, n}
        }
    }
    return {a, n:n+1}
}

//Eq 4 from Nakano & Yamada (2010)
export function eq4(a, n, yk) {
    if (a === 1) {
        return parseInt(yk/n);
    } else {
        return parseInt(yk * ((1 - a)/ (1 - a**n)))
    }
}
