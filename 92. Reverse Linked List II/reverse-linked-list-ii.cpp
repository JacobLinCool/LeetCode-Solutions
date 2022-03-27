// 92. Reverse Linked List II (6/24/2021)
// Runtime: 4 ms (47.20%) Memory: 7.43 MB (45.64%) 

class Solution {
 public:
  ListNode* reverseBetween(ListNode* head, int m, int n) {
    if (!head || m == n)
      return head;

    ListNode dummy(0, head);
    ListNode* prev = &dummy;

    for (int i = 0; i < m - 1; ++i)
      prev = prev->next;  // point to the node before the sublist [m, n]

    ListNode* tail = prev->next;  // will be the tail of the sublist [m, n]

    // reverse the sublist [m, n] one by one
    for (int i = 0; i < n - m; ++i) {
      ListNode* cache = tail->next;
      tail->next = cache->next;
      cache->next = prev->next;
      prev->next = cache;
    }

    return dummy.next;
  }
};