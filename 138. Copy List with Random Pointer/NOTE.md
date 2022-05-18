## Solution

I use a `hashtable` to memorize if the node has been copied.

The size of the table is `100003`, which is the smallest prime number after 100000. I think it is big enough, and the submission result has confirmed my assumption.

I found that many people use a *interweave list* solution, in my opinion, that is not a good method because it makes side-effect to the original list, which should not happen in a *deep copy* situation.

> After further investigating, I found that `1111` sized hashtable is large enough for this problem.