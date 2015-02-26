# @param nums, a list of integer
# @param k, num of steps
# @return nothing, please modify the nums list in-place.
def rotate(nums, k):
    def reverse(arr, start, end):
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start += 1
            end -= 1
    n = len(nums)
    k = k % n
    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)

nums = [1, 2, 3, 4, 5, 6, 7]
rotate(nums, 3)
assert nums == [5, 6, 7, 1, 2, 3, 4]
nums = [1, 2, 3]
rotate(nums, 0)
assert nums == [1, 2, 3]
nums = [1, 2, 3]
rotate(nums, 4)
assert nums == [3, 1, 2]
