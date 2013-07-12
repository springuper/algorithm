/*jshint node:true, white:true*/
var assert = require('assert'),
    _ = require('./lib/underscore');

/**
 * 拓扑排序
 * @method topologicalSort
 * @link http://en.wikipedia.org/wiki/Topological_sorting
 * @param {Array} vertexes
 * @param {Array} edges
 * @return {Array}
 */
function topologicalSort(vertexes, edges) {
    var l = [], s,
        n, i, vertex;

    s = findNoInVertexes(vertexes, edges);
    while (s.length) {
        n = s.shift();
        l.push(n);
        for (i = 0; i < edges.length; ++i) {
            if (edges[i][0] !== n) continue;
            vertex = edges[i][1];
            edges.splice(i--, 1);
            if (isVertexNoIn(vertex, edges)) {
                s.push(vertex);
            }
        }
    }

    if (!_.isEmpty(edges)) {
        throw new Error('亲，存在循环依赖');
    }

    return l;
}

/**
 * 找出没有入边的顶点集合
 * @method findNoInVertexes
 * @param {Array} vertexes
 * @param {Array} edges
 * @return {Array}
 */
function findNoInVertexes(vertexes, edges) {
    var ret = [],
        hash = {};
    
    vertexes.forEach(function (v) {
        hash[v] = 0;
    });
    edges.forEach(function (edge) {
        hash[edge[1]] = 1;
    });
    vertexes.forEach(function (v) {
        if (!hash[v]) ret.push(v);
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
    var i, len;

    for (i = 0, len = edges.length; i < len; ++i) {
        if (edges[i][1] === vertex) return false;
    }

    return true;
}

/**
 * 计算依赖
 * @method resolveDependency
 * @param {Object} deps
 * @return {Array}
 */
function resolveDependency(deps) {
    var vertexes,
        edges = [],
        p;

    vertexes = _.keys(deps);
    for (p in deps) {
        if (deps.hasOwnProperty(p)) {
            deps[p].forEach(function (v) {
                edges.push([p, v]);
            });
        }
    }

    return topologicalSort(vertexes, edges);
}

var es = {
    'A': ['C'],
    'B': ['C', 'E'],
    'C': ['D', 'E'],
    'D': [],
    'E': []
};
var esCycle = {
    'A': ['B'],
    'B': ['A']
};
assert.deepEqual(resolveDependency(es), ['A', 'B', 'C', 'D', 'E'], 'DAG failed');
assert.throws(function () {
    resolveDependency(esCycle);
}, 'DCG failed');
