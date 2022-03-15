// 141. Linked List Cycle (3/8/2022)
// Runtime: 14 ms (44.90%) Memory: 8.11 MB (0.00%) 

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
bool hasCycle (struct ListNode* head) {
    if (head == NULL || head->next == NULL) {
        return false;
    }
    
    struct ListNode* tail = head;
    
    while (head->next && head->next->next) {
        head = head->next->next;
        tail = tail->next;

        if (head == tail) {
            return true;
        }
    }
    
    return false;
}
