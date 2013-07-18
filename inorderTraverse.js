/*jshint node:true, white:true*/
var assert = require('assert'),
    _ = require('./lib/underscore');

/**
 * 中序遍历
 * @method inorderTraverse
 * @param {Object} tree
 * @return {Array}
 */
function inorderTraverse(tree) {
    var ret = [];

    if (tree.left) ret = ret.concat(inorderTraverse(tree.left));
    ret.push(tree.value);
    if (tree.right) ret = ret.concat(inorderTraverse(tree.right));

    return ret;
}

/**
 * 非递归中序遍历
 * @method inorderTraverseNonrecursive
 * @param {Object} tree
 * @return {Array}
 */
function inorderTraverseNonrecursive(tree) {
    var ret = [],
        stack = [],
        node = tree,
        top;

    do {
        // 遍历左子树
        while (node) {
            stack.push(node);
            node = node.left;
        }
        do {
            // 操作根结点
            top = stack.pop();
            ret.push(top.value);
            // 遍历右子树
            if (top.right) {
                node = top.right;
                break;
            }
        } while (stack.length)
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
assert.deepEqual(inorderTraverse(tree), ['B', 'E', 'D', 'A', 'F', 'C', 'G'], 'recursive failed');
assert.deepEqual(inorderTraverseNonrecursive(tree), ['B', 'E', 'D', 'A', 'F', 'C', 'G'], 'nonrecursive failed');
