# def recursion (n):
#     if n == 1:
#         return 1
#     else:
#         res = n * recursion(n - 1)
#         print("indeterminate result for ", n, " * factorial(", n-1, "): ", res)
#         return res

# recursion(4)


def iterative_factorial(n):
    result = 1
    for i in range(2, n+1):
        result *= i
    return result

print(iterative_factorial(4))