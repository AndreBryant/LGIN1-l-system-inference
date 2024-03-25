import { getAandN, getAlphaOfConstants, getPotentialSuccs, getUniqueChars, testSuccs } from "./LGIN1.js";

const axiom = 'A';
const pre = 'A';
const Y = 'A[A[A[A'

var YChars = getUniqueChars(Y); // step 1

const {a, n} = getAandN(YChars.filter(obj => obj.constant == false)[0].count); // step 2

// step 3
var succData = [];
for (const obj of YChars) {
    if (!obj.constant) {
        obj.alpha = a;
    } else {
        obj.alpha = getAlphaOfConstants(a, n, obj.count);
    }
    succData.push({char: obj.char, alpha: obj.alpha});
}

// step 4
const potentialSuccs = getPotentialSuccs(Y, succData);

// step 5
const solution = testSuccs(axiom, n, pre, Y, potentialSuccs);

// console.log("Ychars:", YChars)
// console.log("succData:", succData)
// console.log("Potential succs:",potentialSuccs, '\n\n\n')
console.log(`Given:\tY = ${Y},\n\taxiom = ${axiom},\n\tpredecessor = ${pre}.\n`)
console.log(`Find\tn = ?\n\tRule ${pre}: ${pre} -> ?????\n`)
console.log("Solution:")
console.log('\tNumber of rewritings (n):', n)
console.log(`\tRule A: ${pre} ->`, solution)

