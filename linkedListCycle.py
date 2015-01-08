# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# @param head, a ListNode
# @return a boolean
def hasCycle(head):
    fast = head
    slow = head
    while fast != None and fast.next != None and slow != None:
        fast = fast.next.next
        slow = slow.next
        if fast == slow:
            return True
    return False

a = ListNode('a')
b = ListNode('b')
c = ListNode('c')
d = ListNode('d')
a.next = b
b.next = c
c.next = d
d.next = b
assert hasCycle(a) == True

e = ListNode('e')
f = ListNode('f')
e.next = f
assert hasCycle(e) == False
