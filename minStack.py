class MinStack:
    def __init__(self):
        self.stack = []
        self.minimum = None

    # @param x, an integer
    # @return an integer
    def push(self, x):
        self.stack.append(x)
        if self.minimum == None or x < self.minimum:
            self.minimum = x
        return x

    # @return nothing
    def pop(self):
        top = self.top()
        self.stack.pop()
        if len(self.stack) == 0:
            self.minimum = None
        elif top == self.minimum:
            self.minimum = self.top()
            for num in self.stack:
                if num <= self.minimum:
                    self.minimum = num

    # @return an integer
    def top(self):
        return self.stack[-1]

    # @return an integer
    def getMin(self):
        return self.minimum

s = MinStack()
s.push(5)
assert s.top() == 5
assert s.getMin() == 5
s.push(2)
assert s.top() == 2
assert s.getMin() == 2
s.pop()
assert s.getMin() == 5
