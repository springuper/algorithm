# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# @return a ListNode
def removeNthFromEnd(head, n):
    ahead = behind = head
    while n > 0:
        ahead = ahead.next
        n -= 1
    if ahead == None:
        node = head
        head = head.next
        node.next = None
        return head;
    while ahead.next != None:
        ahead = ahead.next
        behind = behind.next
    node = behind.next
    behind.next = node.next
    node.next = None
    return head

a = ListNode('a')
b = ListNode('b')
c = ListNode('c')
d = ListNode('d')
e = ListNode('e')
a.next = b
b.next = c
c.next = d
d.next = e
removeNthFromEnd(a, 2)
assert c.next == e

assert removeNthFromEnd(e, 1) == None

f = ListNode('f')
g = ListNode('g')
f.next = g
assert removeNthFromEnd(f, 2) == g
