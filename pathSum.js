/**
 * Definition for binary tree
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @param {number} sum
 * @returns {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;
    if (root.val == sum && root.left == null && root.right == null) {
        return true;
    }
    if (root.left) {
        if (hasPathSum(root.left, sum - root.val)) {
            return true;
        }
    }
    if (root.right) {
        if (hasPathSum(root.right, sum - root.val)) {
            return true;
        }
    }
    return false;
};

var assert = require('assert');

var a = new TreeNode(5);
var b = new TreeNode(4);
var c = new TreeNode(8);
var d = new TreeNode(11);
var e = new TreeNode(13);
var f = new TreeNode(4);
var g = new TreeNode(7);
var h = new TreeNode(2);
var i = new TreeNode(1);
a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;
d.left = g;
d.right = h;
f.right = i;

assert(hasPathSum(a, 22));
assert(hasPathSum(a, 2) === false);
assert(hasPathSum(a, 18));
assert(hasPathSum(null, 2) === false);
