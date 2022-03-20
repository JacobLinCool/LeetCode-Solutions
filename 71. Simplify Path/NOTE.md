## Solution

I use stack to store the path slices, but I think deque will be a better choice because we need to construct the output canonical path in the same order with the given absolute one.

The rules are simple:

1. `".."`: pop last one.
2. `"."` and `""`: do nothing.
3. otherwise, push it.

Then we construct the canonical path by directly access the stack data (not a good way, but works because the underlying structure of my stack).
