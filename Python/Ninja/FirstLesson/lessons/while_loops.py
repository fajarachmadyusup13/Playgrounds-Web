# ninjas = ['ryu', 'crstal', 'yoshi', 'ken']
num = 0
age = 25

# while num < age:
#     print(num)
#     num += 1

while num < age:
    if num == 0:
        num += 1
        continue
    if num % 2 == 0: 
        print(num)
    if num > 10:
        break
    num += 1