/*jshint node:true, white:true*/
var assert = require('assert'),
    _ = require('./lib/underscore');

/**
 * 后序遍历
 * @method postorderTraverse
 * @param {Object} tree
 * @return {Array}
 */
function postorderTraverse(tree) {
    var ret = [];

    if (tree.left) ret = ret.concat(postorderTraverse(tree.left));
    if (tree.right) ret = ret.concat(postorderTraverse(tree.right));
    ret.push(tree.value);

    return ret;
}

/**
 * 非递归后序遍历
 * @method postorderTraverseNonrecursive
 * @param {Object} tree
 * @return {Array}
 */
function postorderTraverseNonrecursive(tree) {
    var ret = [],
        stack = [],
        root = [],
        node = tree,
        top;

    do {
        // 遍历左子树
        while (node) {
            stack.push(node);
            node = node.left;
        }
        do {
            top = stack.pop();
            // 第二次出栈，说明已经遍历过   
            if (root.length && top === root[root.length - 1]) {
                root.pop();
            } else {
                // 遍历右子树
                if (top.right) {
                    stack.push(top);
                    root.push(top);
                    node = top.right;
                    break;
                }
            }
            // 操作根结点
            ret.push(top.value);
        } while (stack.length || root.length)
    } while (node)

    return ret;
}


var tree = {
    value: 'A',
    left: {
        value: 'B',
        right: {
            value: 'D',
            left: {
                value: 'E'
            }
        }
    },
    right: {
        value: 'C',
        left: {
            value: 'F'
        },
        right: {
            value: 'G'
        }
    }
}
assert.deepEqual(postorderTraverse(tree), ['E', 'D', 'B', 'F', 'G', 'C', 'A'], 'recursive failed');
assert.deepEqual(postorderTraverseNonrecursive(tree), ['E', 'D', 'B', 'F', 'G', 'C', 'A'], 'nonrecursive failed');
