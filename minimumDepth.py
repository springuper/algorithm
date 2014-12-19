# Definition for a  binary tree node
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# @param root, a tree node
# @return an integer
def minDepth(root):
    if root == None:
        return 0
    queue = [root]
    count = 1
    nextCount = 0
    depth = 1
    while len(queue) > 0:
        node = queue.pop(0)
        count -= 1
        if node.left == None and node.right == None:
            return depth
        if node.left != None:
            queue.append(node.left)
            nextCount += 1
        if node.right != None:
            queue.append(node.right)
            nextCount += 1
        if count == 0:
            depth += 1
            count = nextCount
            nextCount = 0

a = TreeNode('a')
b = TreeNode('b')
c = TreeNode('c')
a.left = b
a.right = c
assert minDepth(a) == 2
assert minDepth(c) == 1

d = TreeNode('d')
e = TreeNode('e')
d.right = e
assert minDepth(d) == 2

f = TreeNode('f')
g = TreeNode('g')
h = TreeNode('h')
i = TreeNode('i')
j = TreeNode('j')
f.left = g
f.right = h
g.left = i
h.right = j
assert minDepth(f) == 3
