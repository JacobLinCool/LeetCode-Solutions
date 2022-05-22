// 876. Middle of the Linked List (11/25/54210)
// Runtime: 0 ms (94.37%) Memory: 5.75 MB (75.42%) 

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* middleNode (struct ListNode* head) {
    int i = 0;
    struct ListNode* middle = head;
    
    while (head) {
        if (i % 2) {
            middle = middle->next;
        }
        i++;
        head = head->next;
    }
    
    return middle;
}
