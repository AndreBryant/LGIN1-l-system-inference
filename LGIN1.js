import { applySucc, countChar, isConstant } from "./utils.js";
import { eq3, eq4 } from "./equations.js";

export function getUniqueChars(Y) {
    var arr = [];
    for(const y of Y){
        if (!arr.some(obj => obj.char === y)){
            const obj = {
                char: y,
                count: countChar(y, Y),
                constant: isConstant(y),
                alpha: null
            }
            arr.push(obj)
        }
    }
    return arr;
}

export function getAandN(Y_A){
    return eq3(Y_A);
}

export function getAlphaOfConstants(a, n, yk) {
    return eq4(a, n, yk);
}

export function getPotentialSuccs(Y, succData) {
    //get the succLength
    let succLength = 0;
    for (const char of succData) {
        succLength += char.alpha;
    }

    //get the candidate successors
    const candidates = [];
    let l = 0, r = succLength;
    while (r <= Y.length) {
        const candidate = Y.substring(l,r);
        if (candidates.includes(candidate)) {
            l++;
            r++;
            continue;
        }
        let invalid = false;
        for (const obj of succData) {
            if (countChar(obj.char, candidate) !== obj.alpha) {
                invalid = true
                break;
            }
        }
        if (!invalid) candidates.push(candidate);
        l++;
        r++;
    }
    return [...new Set(candidates)];
}

export function testSuccs(axiom, n, pre, goal, succs) {
    let solution = '';
    for (const succ of succs) {
        let currentSentence = axiom;
        for (let i = 0; i < n; i++) {
            currentSentence = applySucc(currentSentence, succ, pre)
        }
        if (currentSentence === goal) solution = succ;
    }
    return solution || null;
}