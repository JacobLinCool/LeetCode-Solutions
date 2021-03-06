// 21. Merge Two Sorted Lists (10/8/54149)
// Runtime: 9 ms (12.52%) Memory: 6.11 MB (45.11%) 

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* mergeTwoLists (struct ListNode* list1, struct ListNode* list2) {
    struct ListNode* head = (struct ListNode*)calloc(1, sizeof(struct ListNode));
    struct ListNode* tail = head;
    
    while (list1 || list2) {
        if (list2 == NULL) {
            tail->next = list1;
            list1 = list1->next;
        }
        else if (list1 == NULL) {
            tail->next = list2;
            list2 = list2->next;
        }
        else if (list1->val < list2->val) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        
        tail = tail->next;
    }
    
    return head->next;
}
