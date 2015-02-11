# @param A, a list of integer
# @return an integer
def firstMissingPositive(A):
    i = 0
    n = len(A)
    while i < n:
        if A[i] != (i + 1) and A[i] > 0 and A[i] <= n and A[i] != A[A[i] - 1]:
            tmp = A[i]
            A[i] = A[tmp - 1]
            A[tmp - 1] = tmp
        else:
            i += 1

    for i in range(n):
        if A[i] != (i + 1):
            return i + 1

    return n + 1


assert firstMissingPositive([1, 2, 0]) == 3
assert firstMissingPositive([3, 4, -1, 1]) == 2
