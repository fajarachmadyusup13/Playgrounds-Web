from adt.Stack import Stack

def decToBin(decimal):
    remStack = Stack()

    while decimal > 0:
        rem = decimal % 2
        remStack.push(rem)
        decimal = decimal // 2

    binStr = ''

    while not remStack.isEmpty():
        binStr = binStr + str(remStack.pop())

    return binStr


print(decToBin(40))