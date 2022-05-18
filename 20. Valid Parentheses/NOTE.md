## Solution

It is a classic problem about stack.

We iterate over the whole string, when we meet the left parenthesis (`(`, `[`, or `{`), push them into the stack.

Then, when we meet the right parenthesis (`)`, `]`, or `}`), check if the stack top is the paired one of it.

At the end, if all the items in the stack are removed (popped), then we know the all the parentheses are paired.