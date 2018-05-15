from adt.Stack import Stack

def revStr(word):
    myStack = Stack()

    for x in word:
        myStack.push(x)

    revString = ''
    
    while not myStack.isEmpty():
        revString = revString + myStack.pop()
    
    return revString

def tesEqual(revStr, realStr):
    if revStr == realStr:
        return True
    else:
        return False

print(tesEqual(revStr('apple'), 'apple'))


