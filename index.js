import { getAandN, getAlphaOfConstants, getPotentialSuccs, getUniqueChars, testSuccs } from "./LGIN1.js";
import { LGIN1ProblemSet } from "./problemSet.js"

for (const problem of LGIN1ProblemSet) {
    console.time('Execution Time');
    const {axiom, pre, Y} = problem;
    
    var YChars = getUniqueChars(Y);
    const an = getAandN(YChars.filter(obj => obj.constant == false)[0].count);
    
    var bestSolution;
    var a, n;
    var succData;
    var potentialSuccs
    
    // For each element in an[], check if there will be a pair that will produce a fit solution.
    for (const pair of an) {
        ({a , n} = pair);
        succData = [];
        for (const obj of YChars) {
            if (!obj.constant) {
                obj.alpha = a;
            } else {
                obj.alpha = getAlphaOfConstants(a, n, obj.count);
            }
            succData.push({char: obj.char, alpha: obj.alpha});
        } 
        potentialSuccs = getPotentialSuccs(Y, succData);
        const solution = testSuccs(axiom, n, pre, Y, potentialSuccs);
        if (solution !== null) {
            bestSolution = solution;
            break;
        }
    }
    console.timeEnd('Execution Time');
    console.log();
    
    // FOR DEBUGGING:
    // console.log('an', an)
    // console.log('a and n', a, n)
    // console.log("Ychars:", YChars)
    // console.log("succData:", succData)
    // console.log("Potential succs:",potentialSuccs, '\n\n\n')
    
    // SOLUTION OUTPUT:
    console.log(`Given:\tY = ${Y.length > 20? Y.substring(0, 20)+"..." : Y}\n\taxiom = ${axiom}\n\tpredecessor = ${pre}\n`)
    console.log(`Find\tn = ?\n\tRule ${pre}: ${pre} -> ?????\n`)
    console.log("Solution:")
    console.log('\tNumber of rewritings (n):', n)
    console.log(`\tRule A: ${pre} ->`, bestSolution)
    console.log('-----------------------------------------------------------')    
}
