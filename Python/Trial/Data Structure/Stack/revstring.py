def revString(word, ):
    realStr = list(word)
    tempStr = []

    for i in range(len(realStr)-1, -1, -1):
        tempStr.append(realStr[i])
    revStr = ''.join(tempStr)

    return revStr

def testEqual(revStr, realStr):
    if revStr == realStr:
        return True
    else:
        return False

print(testEqual(revString('baru'), 'baru'))
