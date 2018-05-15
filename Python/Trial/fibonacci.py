# def fib(n):
#     if n == 0:
#         return 0
#     elif n == 1:
#         return 1
#     else:
#         res = fib(n-1) + fib(n-2)
#         print('fib({2}-1):{0} fib({2}-2):{1}'.format(fib(n-1), fib(n-2), n))
#         return res
# print(fib(5))

def fib_iterative(n):
    old, new = 0, 1
    if n == 0:
        return 0
    for i in range(n-1):
        old, new = new, old + new
    return new
print(fib_iterative(7))

