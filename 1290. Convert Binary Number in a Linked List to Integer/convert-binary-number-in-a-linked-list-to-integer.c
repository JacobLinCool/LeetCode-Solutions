// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)
// Runtime: 3 ms (29.57%) Memory: 5.59 MB (84.37%) 

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


int getDecimalValue(struct ListNode* head) {
    long long result = 0;
    while(head) {
        result <<= 1;
        result += head->val;
        head = head->next;
    }
    return result;
}