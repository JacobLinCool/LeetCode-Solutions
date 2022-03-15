# 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)
# Runtime: 20 ms (94.57%) Memory: 14.18 MB (5.90%) 

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        result = 0
        
        while head != None:
            result <<= 1
            result += head.val
            head = head.next
        
        return result