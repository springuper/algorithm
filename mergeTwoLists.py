# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# @param two ListNodes
# @return a ListNode
def mergeTwoLists(l1, l2):
    def getNext(l1, l2):
        if l1 and l2:
            return l1.val < l2.val
        return True if l1 else False

    if not l1 and not l2:
        return None

    ret = getNext(l1, l2)
    if ret:
        l = head = l1
        l1 = l1.next
    else:
        l = head = l2
        l2 = l2.next

    while l1 or l2:
        ret = getNext(l1, l2)
        if ret:
            l.next = l1
            l1 = l1.next
        else:
            l.next = l2
            l2 = l2.next
        l = l.next

    return head

a = ListNode(1)
b = ListNode(2)
c = ListNode(4)
a.next = b
b.next = c

d = ListNode(3)
e = ListNode(5)
d.next = e

l = mergeTwoLists(a, d)
assert l.val == 1
assert l.next.val == 2
assert l.next.next.val == 3
assert l.next.next.next.val == 4
assert l.next.next.next.next.val == 5
