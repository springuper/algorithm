# @param S, a list of integer
# @return a list of lists of integer
def subsets(S):
    ret = []
    length = len(S)
    # sort
    S.sort()

    # traverse
    def traverse(s, level):
        if level == length:
            ret.append(s)
            return
        traverse(s, level + 1)
        traverse(s + [S[level]], level + 1)

    traverse([], 0)
    return ret;

assert subsets([1, 2, 3]) == [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
