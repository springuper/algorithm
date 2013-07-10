/*jshint node:true, white:true*/
var assert = require('assert');

/**
 * 拓扑排序
 * @method topologicalSort
 * @param {Array} vertexes
 * @param {Object} edges
 * @return {Array}
 */
function topologicalSort(vertexes, edges) {
    var l = [],
        s = findNoInVertexes(vertexes, edges),
        n,
        edgesFromN,
        i;

    while (s.length) {
        n = s.shift();
        l.push(n);
        edgesFromN = edges[n];
        if (edgesFromN) {
            for (i = 0; i < edgesFromN.length; ++i) {
                vertex = edgesFromN[i];
                edgesFromN.splice(i--, 1);
                if (isVertexNoIn(vertex, edges)) {
                    s.push(vertex);
                }
            };
            delete edges[n];
        }
    }

    if (!isEmpty(edges)) {
        throw new Error('亲，存在循环依赖');
    }

    return l;
}

/**
 * 找出没有入边的顶点
 * @method findNoInVertexes
 * @param {Array} vertexes
 * @param {Object} edges
 * @return {Array}
 */
function findNoInVertexes(vertexes, edges) {
    var ret = [];
    
    vertexes.forEach(function (vertex) {
        if (isVertexNoIn(vertex, edges)) {
            ret.push(vertex);
        }
    });

    return ret;
}

/**
 * 顶点是否没有入边
 * @method findNoInVertexes
 * @param {String} vertex
 * @param {Object} edges
 * @return {Boolean}
 */
function isVertexNoIn(vertex, edges) {
    var p;

    for (p in edges) {
        if (edges.hasOwnProperty(p)) {
            if (edges[p].indexOf(vertex) !== -1) {
                return false;
            }
        }
    }

    return true;
}

/**
 * 对象是否为空
 * @method isEmpty
 * @param {Object} o
 * @return {Boolean}
 */
function isEmpty(o) {
    var p;

    for (p in o) {
        if (o.hasOwnProperty(p)) return false;
    }

    return true;
};

var vs = ['A', 'B', 'C', 'D', 'E'];
var es = {
    'A': ['C'],
    'B': ['C'],
    'C': ['D', 'E']
};
assert.deepEqual(topologicalSort(vs, es), ['A', 'B', 'C', 'D', 'E']);
