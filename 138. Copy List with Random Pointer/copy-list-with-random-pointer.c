// 138. Copy List with Random Pointer (3/12/2022)
// Runtime: 8 ms (82.17%) Memory: 8.40 MB (58.81%) 

/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *next;
 *     struct Node *random;
 * };
 */

#define HASH_SIZE 1111

struct Node* clone (struct Node* source, struct Node* created[]) {
    if (source == NULL) {
        return NULL;
    }
    
    int id = (int64_t)source % HASH_SIZE;

    if (!created[id]) {
        created[id] = (struct Node*)malloc(1 * sizeof(struct Node));
        created[id]->val = source->val;
        created[id]->next = clone(source->next, created);
        created[id]->random = clone(source->random, created);
    }

    return created[id];
}

struct Node* copyRandomList (struct Node* head) {
    struct Node* created[HASH_SIZE] = { NULL };
    return clone(head, created);
}
