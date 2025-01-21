# good moorning, Python is awesome!

# print("Helllo Ben, welcome to python 🦆")

# '''My project is terrible, beacuse i forgot how to write awesome'''


# program to calculate the total cost of 3 items 

# pen = 8
# notebook = 15
# pencilcase = 18

# def print_result(a, b, c):
    # result = int(a + b + c)
    # print(result)

# print_result(pen, notebook, pencilcase)


# check if a number is within a range

# def is_in_range():
#     userAge = input("How old are you?")
#     age = int(userAge) 
#     if 18 < age < 48:
#         print("Yes, you can join us")
#     elif 18 > age:
#         print("Sorry, yo´re too young :(")
#     elif age > 48:
#         print("Sorry, yo´re too old for this :(")

# is_in_range()


# get user name, age and 2 numbers returning from them a rectangle area

# name = input("What's your name?")
# age = int(input("How old are you?"))
# print(f"Hello {name}")


# print("Now {name}, please insert a height and a width and i will calculate the area of a rectangle")
# h = input(("Height: "))
# w = input(("Width: "))
# h = int(h)
# w = int(w)
# print(f"Rectangle area = {h*w} cm2")

# a = input("insert a number: ")
# b = input("another one: ")
# a = int(a)
# b = int(b)
# print(f"{a} x {b} = {a*b}\n{a} / {b} = {a/b}\n{a} + {b} = {a+b}\n6{a} - {b} = {a-b}")

# checking if a number is positive, negative or zero
# num = input("insert a number: ")
# num = int(num)
# if num > 0:
#     print("Positive number")
# elif num == 0:
#     print("neutral number")
# else: 
#     print("Negative number")

# checking leaps years
# O ano deve ser divisível por 4.
# Se o ano for divisível por 100, ele também deve ser divisível por 400 para ser considerado bissexto.
# Caso contrário, o ano não será bissexto.

# year = int(input("Choose a year: "))
# if year % 4 == 0 and year % 100 != 0 or year%100==0 and year%400==0:
#     print("thats a leap year, congrats!")
# else:
#     print("try again")

# numbers = [1, 33, 5, 6, 3, 7, 8, 22, 44, 55, 66, 99, 88, 63, 34, 7, 0, 2]
# total = 0 
# for i in range (10):
#     total = total + numbers[i]
# print(total)

# while True:
#     user_input = input("Enter something (type 'exit' to quit): ")
#     if user_input == "exit":
#         print("Exiting the program. Goodbye!")
#         break
#     else:
#         print(f"You entered: {user_input}")

#triangle pattern 
# for i in range(1, 6):
#     for j in range(i):
#         print("*", end="")
#     print()        


#skipping odd numbers in a range 
# numbers = [1, 33, 5, 6, 3, 7, 8, 22, 44, 55, 66, 99, 88, 63, 34, 7, 0, 2]
# for i in range(len(numbers)):
#     if numbers[i] % 2 == 0:
#         print(numbers[i]) 