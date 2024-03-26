import { log10 } from "./utils.js"

//Eq 3 from Nakano & Yamada (2010)
export function eq3(x) {
    //modify this to return an array of objects, like candidates of possible pairs of a and n. with low priority yung n = 1.
    let n, a;
    let candidates = [];
    for (n = x; n > 0; n--) {
        a = Math.round(Math.pow(10,log10(x)/n));
        a = isNaN(a) ? 1 : a;
        if (Math.pow(a,n) ) {
            candidates.push({a,n})
        }
    }
    return candidates
}

//Eq 4 from Nakano & Yamada (2010)
export function eq4(a, n, yk) {
    if (a === 1) {
        return parseInt(yk/n);
    } else {
        return Math.round(yk * ((1 - a)/ (1 - a**n)))
    }
}
