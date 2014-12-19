# Definition for a  binary tree node
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# @param root, a tree node
# @return a boolean
def isBalanced(root):
    def traverse(node):
        if node == None:
            return 0
        depthLeft = traverse(node.left)
        if depthLeft < 0:
            return depthLeft
        depthRight = traverse(node.right)
        if depthRight < 0:
            return depthRight
        if abs(depthLeft - depthRight) > 1:
            return -1
        else:
            return max(depthLeft, depthRight) + 1
    return traverse(root) >= 0

a = TreeNode('a')
b = TreeNode('b')
c = TreeNode('c')
d = TreeNode('d')
e = TreeNode('e')
f = TreeNode('f')
g = TreeNode('g')
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
e.right = g
assert isBalanced(a) == True

h = TreeNode('h')
i = TreeNode('i')
j = TreeNode('j')
h.left = i
i.left = j
assert isBalanced(h) == False

k = TreeNode('k')
assert isBalanced(k)
