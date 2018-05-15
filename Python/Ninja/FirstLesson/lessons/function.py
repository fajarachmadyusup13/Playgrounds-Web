# def greet(name = 'ryu', time = 'morning'):
#     print(f'Good {time} {name}, hope you are well')

# name = input('Enter your name: ')
# time = input('Enter the time of day: ')

# greet()

def area(radius):
    return 3.142 * radius**2

def vol(area, length):
    print(area * length)

radius = int(input('Enter a radius: '))
length = int(input('Enter a length: '))


vol(area(radius), length)