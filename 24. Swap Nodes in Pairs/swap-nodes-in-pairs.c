// 24. Swap Nodes in Pairs (2/16/2022)
// Runtime: 0 ms (94.91%) Memory: 5.79 MB (72.99%) 

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* swapPairs(struct ListNode* head) {
    struct ListNode* second = head ? head->next : NULL;
    
    if (!second) {
        return head;
    }
    
    struct ListNode* next_head = swapPairs(second->next);
    head->next = next_head;
    second->next = head;
    
    return second;
}
