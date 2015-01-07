# Hash + Link List
# @link http://www.acmerblog.com/leetcode-lru-cache-lru-5745.html

class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.previous = None
        self.next = None

class LRUCache:

    # @param capacity, an integer
    def __init__(self, capacity):
        self.capacity = capacity
        self.count = 0
        self.cache = {}
        self.head = Node(None, None)
        self.tail = Node(None, None)
        self.head.next = self.tail
        self.tail.previous = self.head

    def attach(self, node):
        self.head.next.previous = node
        node.next = self.head.next
        self.head.next = node
        node.previous = self.head

    def detach(self, node):
        node.previous.next = node.next
        node.next.previous = node.previous

    # @return an integer
    def get(self, key):
        if key in self.cache:
            node = self.cache[key]
            self.detach(node)
            self.attach(node)
            return node.val
        else:
            return -1

    # @param key, an integer
    # @param value, an integer
    # @return nothing
    def set(self, key, value):
        if key in self.cache:
            oldNode = self.cache[key]
            node = Node(key, value)
            self.cache[key] = node
            self.detach(oldNode)
            self.attach(node)
        else:
            if self.count == self.capacity:
                node = self.tail.previous
                self.detach(node)
                del self.cache[node.key]
                del node
                self.count -= 1
            self.count += 1
            node = Node(key, value)
            self.cache[key] = node
            self.attach(node)

c1 = LRUCache(2)
c1.set(1, 2)
c1.set(2, 4)
assert c1.get(2) == 4
assert c1.get(1) == 2
c1.set(3, 6)
assert c1.get(2) == -1
assert c1.get(3) == 6

c2 = LRUCache(1)
c2.set(2, 1)
assert c2.get(2) == 1
c2.set(3, 2)
assert c2.get(2) == -1
assert c2.get(3) == 2

c3 = LRUCache(2)
c3.set(2,1)
c3.set(2,2)
assert c3.get(2) == 2
c3.set(1,1)
c3.set(4,1)
assert c3.get(2) == -1

c4 = LRUCache(3)
c4.set(1,1)
c4.set(2,2)
c4.set(3,3)
c4.set(4,4)
c4.get(4)
c4.get(3)
c4.get(2)
c4.get(1)
c4.set(5,5)
c4.get(1)
c4.get(2)
c4.get(3)
assert c4.get(4) == -1
c4.get(5)
