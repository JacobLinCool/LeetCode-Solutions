// 61. Rotate List (4/29/54160)
// Runtime: 8 ms (21.70%) Memory: 6.09 MB (70.33%) 

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* rotateRight (struct ListNode* head, int k) {
    int len = 0;
    struct ListNode* ptr = head;
    
    if (head == NULL) {
        return head;
    }
    
    while (true) {
        len++;
        if (ptr->next) {
            ptr = ptr->next;
        } else {
            ptr->next = head;
            ptr = head;
            break;
        }
    }
    
    int offset = len - ((k + 1) % len);
    for (int i = 0; i < offset; i++) {
        ptr = ptr->next;
        if (i == offset - 1) {
            struct ListNode* new = ptr->next;
            ptr->next = NULL;
            return new;
        }
    }
    
    return head;
}