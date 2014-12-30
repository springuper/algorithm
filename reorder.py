# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# @param head, a ListNode
# @return nothing
def reorderList(head):
    # count
    count = 0
    node = head
    tail = node
    while node:
        count += 1
        tail = node
        node = node.next
    if count <= 2:
        return

    # reverse right half
    step = 0
    pivot = (count - 1) / 2;
    behind = head
    ahead = behind.next
    while ahead:
        if step < pivot:
            behind = ahead
            ahead = ahead.next
        else:
            node = ahead.next
            if step == pivot:
                behind.next = None
                ahead.next = None
            else:
                ahead.next = behind
            behind = ahead
            ahead = node
        step += 1

    # insert
    while head and tail:
        nodeHead = head.next
        nodeTail = tail.next
        head.next = tail
        tail.next = nodeHead
        head = nodeHead
        tail = nodeTail

a = ListNode('a')
b = ListNode('b')
c = ListNode('c')
d = ListNode('d')
a.next = b
b.next = c
c.next = d
reorderList(a)
assert a.next == d
assert b.next == c
assert c.next == None

e = ListNode('e')
f = ListNode('f')
g = ListNode('g')
e.next = f
f.next = g
reorderList(e)
assert e.next == g
assert g.next == f
assert f.next == None
