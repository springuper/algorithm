# @param S, a list of integer
# @return a list of lists of integer
def subsets(S):
        ret = []
        length = len(S)
        # sort
        S.sort()

        # traverse
        def traverse(s, level, flag):
            if level == length:
                ret.append(s)
                return
            traverse(s + [S[level]], level + 1, True)
            if level == 0 or S[level] != S[level - 1] or not flag:
                traverse(s, level + 1, False)

        traverse([], 0, False)
        return ret;

assert subsets([1, 2, 2]) == [[1, 2, 2], [1, 2], [1], [2, 2], [2], []]
