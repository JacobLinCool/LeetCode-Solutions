# 1290. Convert Binary Number in a Linked List to Integer (8/15/53904)
# Runtime: 16 ms (81.39%) Memory: 13.33 MB (52.02%) 

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
        