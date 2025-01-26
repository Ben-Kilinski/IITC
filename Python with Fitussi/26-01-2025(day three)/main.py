# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10]
# for i in range(len(numbers)):
#     numbers[i] = numbers[i] **2

# print(numbers)

# def factorial(num):
#     total = 1
#     for i in range(1, num+1):
#         total = i*total
#         print(f'{total} x {i}')
#     return total    

# print(factorial(4))            


# def final_price(price, disc):
#     numeric_value = float(disc.strip('%')) / 100
#     final_price = price * (1 - int(disc)) 

# print(final_price((100, '30%')))


# def greeting(*args):
#      print(f"Hello {', '.join(args)}")

# greeting("ben", "sasha")

# def product(**kwargs):
#     return kwargs

# print(product(name="bike", price = 400))


# def evens(numbers):
#     return list(filter(lambda x: x % 2 == 0, numbers))

# print(evens([1, 2, 3, 4, 5, 6]))


def sum_rooth (nums):
    print(sum(nums)**(1/2))


