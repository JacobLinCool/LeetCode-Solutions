// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)
// Runtime: 0 ms (91.88%) Memory: 8.30 MB (45.67%) 

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int getDecimalValue(ListNode* head) {
        long long result = 0;
        while(head) {
            result <<= 1;
            result += head->val;
            head = head->next;
        }
        return result;
    }
};