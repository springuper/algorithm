# @param A  a list of integers
# @param m  an integer, length of A
# @param B  a list of integers
# @param n  an integer, length of B
# @return nothing(void)
def merge(A, m, B, n):
    i = j = 0
    while i < (m + n) and j < n:
        if i >= len(A) or A[i] > B[j]:
            A.insert(i, B[j])
            j += 1
        i += 1


A = [1, 3, 5]
B = [2, 4]
merge(A, 3, B, 2)
assert A == [1, 2, 3, 4, 5]

A = []
B = [2, 4]
merge(A, 0, B, 2)
assert A == [2, 4]

A = [1, 3, 5]
B = []
merge(A, 3, B, 0)
assert A == [1, 3, 5]

A = []
B = [1]
merge(A, 0, B, 1)
assert A == [1]
