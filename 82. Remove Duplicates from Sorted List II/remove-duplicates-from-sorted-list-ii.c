// 82. Remove Duplicates from Sorted List II (3/9/2022)
// Runtime: 7 ms (40.54%) Memory: 6.36 MB (65.59%) 

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates (struct ListNode* head) {
    if (!head) {
        return head;
    }
    
    if (head->next && head->next->val == head->val) {
        while (head->next && head->next->val == head->val) {
            head = head->next;
        }
        return deleteDuplicates(head->next);
    }
    else {
        head->next = deleteDuplicates(head->next);
        return head;
    }
}
