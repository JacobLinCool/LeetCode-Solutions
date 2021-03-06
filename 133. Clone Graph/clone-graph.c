// 133. Clone Graph (1/18/54117)
// Runtime: 0 ms (93.59%) Memory: 6.78 MB (80.77%) 

/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numNeighbors;
 *     struct Node** neighbors;
 * };
 */

struct Node* clone(struct Node* source, struct Node* created[]) {
    if (source == NULL) {
        return NULL;
    }

    if (!created[source->val]) {
        struct Node* cloned = (struct Node*)malloc(1 * sizeof(struct Node));
        cloned->val = source->val;
        cloned->numNeighbors = source->numNeighbors;
        cloned->neighbors = (struct Node**)malloc(source->numNeighbors * sizeof(struct Node*));

        created[source->val] = cloned;

        for (int i = 0; i < source->numNeighbors; i++) {
            cloned->neighbors[i] = clone(source->neighbors[i], created);
        }
    }

    return created[source->val];
}

struct Node* cloneGraph(struct Node* s) {
    struct Node* created[101] = { NULL };
    return clone(s, created);
}
