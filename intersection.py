class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# @param two ListNodes
# @return the intersected ListNode
def getIntersectionNode(headA, headB):
    if headA == None or headB == None:
        return None
    tailA = headA
    countA = 0
    while tailA.next != None:
        tailA = tailA.next
        countA += 1
    tailB = headB
    countB = 0
    while tailB.next != None:
        tailB = tailB.next
        countB += 1
    if tailA != tailB:
        return None

    if countA > countB:
        for i in range(countA - countB):
            headA = headA.next
    elif countB > countA:
        for i in range(countB - countA):
            headB = headB.next
    while headA != headB:
        headA = headA.next
        headB = headB.next
    return headA



a1 = ListNode('a1')
a2 = ListNode('a2')
b1 = ListNode('b1')
b2 = ListNode('b2')
b3 = ListNode('b3')
c1 = ListNode('c1')
c2 = ListNode('c2')
c3 = ListNode('c3')
a1.next = a2
a2.next = c1
b1.next = b2
b2.next = b3
b3.next = c1
c1.next = c2
c2.next = c3
assert getIntersectionNode(a1, b1) == c1

d1 = ListNode('d1')
d2 = ListNode('d2')
e1 = ListNode('e1')
e2 = ListNode('e2')
d1.next = d2
e1.next = e2
assert getIntersectionNode(d1, e1) == None
