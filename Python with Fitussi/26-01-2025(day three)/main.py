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




# x = 1
# y = 2
# z = 3
# x, y, z = z, x, y 
# print(x, y, z)

# try:
#     from main2 import sum_rooth  # Attempt to import sum_rooth from main2
#     sum_rooth([1, 2, 3, 4, 5, 1])  # Call the function if import is successful
# except FileNotFoundError:
#     print("File does not exist")  # Handle the case where the file is missing
# except ImportError:
#     print("The function or module could not be imported")  # Handle import errors
# finally:
#     print("Execution done")  # Always execute this block


try:
    with open(input("Enter the file name: "), 'r') as file:
        numbers = [float(line.strip()) for line in file if line.strip().isdigit()]
        print("Numbers read from the file:", numbers)
except FileNotFoundError:
    print("Error: File not found.")
except ValueError:
    print("Error: File contains invalid data.")
