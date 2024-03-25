# Implementation of LGIN1 (Nakano & Yamada, 2010) in JS.

LGIN2 will probably be implemented using python, idk yet. haha

To understand l-system inference better, I need to learn the implementation of the L-system Grammar Induction based on Number theory for 1 rule (LGIN1) method by Nakano and Yamada 2010 (kinda like a starting point).

Given an Axiom and the String Y, find the rule for the predecessor (non-constant, predecessor != successor).

## Process:

1. Get the `Y_A` and `Y_k`'s.
2. Get `alpha of a` and the number of rewritings `n`. Since this is LGIN1, there should only be one non-constant in `YChars`.
3. Update the alpha values, the number of occurences of the specific character in the `succ(A)`.
4. Get potential successors.
5. Check each potential successors to find a solution.

## Running the code

1. Make sure you have NodeJS installed.
2. Go to the root directory and open it in terminal.
3. Type `npm run start`, then enter.

### Try these:

    //Just change the axiom, pre, and Y to infer some l-system with 1 rule.
        const Y = 'A+[A-A]+[A+[A-A]-A+[A-A]]'
        const Y = 'A[+A]A[+A[+A]A]A[+A]A[+A[+A]A[+A[+A]A]A[+A]A]A[+A]A[+A[+A]A]A[+A]A';
        const Y = 'A[A[A[A'

### Source:

    Nakano, R., Yamada, N.: Number theory-based induction of deterministic context-
        free L-system grammar. In: International Conference on Knowledge Discovery and
        Information Retrieval, pp. 194–199. SCITEPRESS (2010)
