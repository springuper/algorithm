'use strict';

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
   this.val = val;
   this.next = null;
}

/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
var swapPairs = function (head) {
    var ahead = new ListNode(null);
    ahead.next = head;
    var a = ahead;
    var b = head;
    var c = b && b.next
    if (!b || !c) return head;
    // update head
    head = c;

    while (true) {
        b.next = c.next;
        a.next = c;
        c.next = b;
        // update a, b, and c
        a = b;
        b = b.next;
        c = b && b.next;
        if (!b || !c) break;
    }
    return head;
};

var assert = require('assert');

var a = new ListNode('a');
var b = new ListNode('b');
var c = new ListNode('c');
var d = new ListNode('d');
a.next = b;
b.next = c;
c.next = d;
var list = swapPairs(a);
console.log(list.next.val);
assert(list.val === 'b');
assert(list.next.val === 'a');
assert(list.next.next.val === 'd');
assert(list.next.next.next.val === 'c');
