# 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)
# Runtime: 16 ms (83.97%) Memory: 13.33 MB (51.71%) 

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def getDecimalValue(self, head):
        """
        :type head: ListNode
        :rtype: int
        """
        result = 0
        
        while head != None:
            result <<= 1
            result += head.val
            head = head.next
        
        return result
        