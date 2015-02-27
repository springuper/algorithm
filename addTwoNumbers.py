# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# @return a ListNode
def addTwoNumbers(l1, l2):
    head = None
    l = None
    carry = 0

    while l1 or l2 or carry:
        if l1:
            val1 = l1.val
            l1 = l1.next
        else:
            val1 = 0
        if l2:
            val2 = l2.val
            l2 = l2.next
        else:
            val2 = 0

        s = val1 + val2 + carry
        carry = int(s / 10)
        n = ListNode(s % 10)
        if not head:
            head = n
            l = n
        else:
            l.next = n
            l = n

    return head

a = ListNode(2)
b = ListNode(4)
c = ListNode(3)
a.next = b
b.next = c

d = ListNode(5)
e = ListNode(6)
f = ListNode(4)
d.next = e
e.next = f

s = addTwoNumbers(a, d)
assert s.val == 7
assert s.next.val == 0
assert s.next.next.val == 8
assert s.next.next.next == None

g = ListNode(5)
h = ListNode(5)

s = addTwoNumbers(g, h)
assert s.val == 0
assert s.next.val == 1
assert s.next.next == None
