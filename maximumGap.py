# @param num, a list of integer
# @return an integer
# @link http://cgm.cs.mcgill.ca/~godfried/teaching/dm-reading-assignments/Maximum-Gap-Problem.pdf
def maximumGap(num):
    length = len(num)
    if length < 2:
        return 0
    elif length == 2:
        return num[0] - num[1] if num[0] > num[1] else num[1] - num[0]

    # find max and min
    maximum = minimum = num[0]
    for item in num:
        if item > maximum:
            maximum = item
        elif item < minimum:
            minimum = item

    # split buckets
    span = (maximum - minimum) * 1.0 / (length - 1)
    buckets = [[] for i in range(length - 1)]
    buckets[0] = [minimum, minimum]
    buckets[length - 2] = [maximum, maximum]
    for item in num:
        if item == maximum:
            continue
        index = int((item - minimum) / span)
        if len(buckets[index]) == 0:
            buckets[index] = [item, item]
        else:
            if buckets[index][0] > item:
                buckets[index][0] = item
            elif buckets[index][1] < item:
                buckets[index][1] = item

    # find max gap
    maximumGap = 0
    previousMax = minimum
    for bucket in buckets:
        if len(bucket) == 0:
            continue
        gap = bucket[0] - previousMax
        if gap > maximumGap:
            maximumGap = gap
        previousMax = bucket[1]

    return maximumGap


assert maximumGap([]) == 0
assert maximumGap([1]) == 0
assert maximumGap([1, 100000]) == 99999
assert maximumGap([1, 2, 3, 4, 6, 7, 8]) == 2
assert maximumGap([5, 4, 1, 2, 8.5, 3]) == 3.5
