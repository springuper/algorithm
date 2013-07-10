/*jshint node:true, white:true*/
var assert = require('assert'),
    _ = require('./lib/underscore');

/**
 * 拓扑排序
 * @method topologicalSort
 * @param {Object} edges
 * @return {Array}
 */
function topologicalSort(edges) {
    var vertexes,
        l = [], s,
        n, edgesFromN, i;

    vertexes = _.keys(edges);
    s = findNoInVertexes(vertexes, edges);
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

    if (!_.isEmpty(edges)) {
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

var es = {
    'A': ['C'],
    'B': ['C'],
    'C': ['D', 'E'],
    'D': [],
    'E': []
};
var esCycle = {
    'A': ['B'],
    'B': ['A']
};
assert.deepEqual(topologicalSort(es), ['A', 'B', 'C', 'D', 'E'], 'DAG failed');
assert.throws(function () {
    topologicalSort(esCycle);
}, 'DCG failed');
