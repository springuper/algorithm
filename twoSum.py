# @return a tuple, (index1, index2)
def twoSum(num, target):
    m = {}
    for k in range(len(num)):
        v = num[k]
        remain = target - v
        if remain in m:
            return (m[remain], k + 1)
        elif v not in m:
            m[v] = k + 1
    return -1

    ## UGLY CODE!
    # m = {}
    # length = len(num)
    # for i in range(length):
    #     if num[i] not in m:
    #         m[num[i]] = []
    #     m[num[i]].append(i + 1);
    # keys = m.keys()
    # keys.sort()
    # i = 0
    # j = len(keys) - 1
    # print m
    # print keys
    # while i <= j:
    #     print i
    #     print j
    #     s = keys[i] + keys[j];
    #     if s > target:
    #         j = j - 1
    #     elif s < target:
    #         i = i + 1
    #     else:
    #         if i == j and len(m[keys[i]]) == 1:
    #             return -1
    #         elif m[keys[i]][0] < m[keys[j]][-1]:
    #             return (m[keys[i]][0], m[keys[j]][-1])
    #         else:
    #             return (m[keys[j]][-1], m[keys[i]][0])
    # return -1

assert twoSum([2, 7, 11, 15], 9) == (1, 2)
assert twoSum([2, 5, 21, 12], 26) == (2, 3)
assert twoSum([150, 24, 79, 50, 88, 345, 3], 200) == (1, 4)
assert twoSum([2, 1, 9, 4, 4, 56, 90, 3], 8) == (4, 5)
