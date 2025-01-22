# movies = ["Jurassic Park", "Indiana Jones", "Back to the Future", "Pirates of the Carebbean", "Harry Potter"]
# movies.append("American Sniper")
# print(movies)
# movies.remove("Pirates of the Carebbean")
# print(movies)

#tuple
# birthday = (10, 3, 1997)
# birthday.remove(3)
# print(birthday)

# ben = {
#     "age" : 27, 
#     "name" : "Ben", 
#     "lname" : "Kilinski", 
#     "occupation" : "student", 
#     "sibus" : False
# }


# print(ben['age'])
# ben["book"] = "Harry Potter"
# print(ben)
# del ben["sibus"]
# print(ben)

# ben = {"football", "guitar", "hamburguer"}
# sabag = {'sibus', " running", "computers", "hamburguer", "ktzitzot"}
# shared_hobbies = set()
# for i in ben:
#     for j in sabag:
#         if i == j:
#             shared_hobbies.add(i)


# print(shared_hobbies)

# colors = ["red", "blue", "yellow", "orange", "black"]
# print(colors[0])
# print(colors[-1])

# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# for i in numbers:
#     if i % 2 == 0:
#         print(i)

# colors_list = ["red", "blue", "yellow", "orange", "black"] 
# print(colors_list)
# colors_tuple = tuple(colors_list)
# print(colors_tuple)



# words = ['hello', 'world', 'python']
# uppercase_words = [word.upper() for word in words]
# print(uppercase_words)


# fruit_prices = {'apple': 2, 'banana': 1}
# for fruit, price in fruit_prices.items():
#     print(f"The price of {fruit} is ${price}")

# -------------------------------------------------------------------------------------


# # **Sets (4 Exercises)**

# # 1. Create a set of three numbers. Add a new number to the set:
# numbers = {1, 2, 3}
# numbers.add(4)
# print(numbers)  # Output: {1, 2, 3, 4}

# # 2. Remove a number from the set and print the updated set:
# numbers.remove(2)
# print(numbers)  # Output: {1, 3, 4}

# # 3. Find the union of two sets: {1, 2, 3} and {3, 4, 5}:
# set1 = {1, 2, 3}
# set2 = {3, 4, 5}
# union = set1.union(set2)
# print(union)  # Output: {1, 2, 3, 4, 5}

# # 4. Find the intersection of two sets: {1, 2, 3} and {3, 4, 5}:
# intersection = set1.intersection(set2)
# print(intersection)  # Output: {3}



# # **Dictionaries (7 Exercises)**

# # 1. Create a dictionary for a student with keys: name, age, and grade. Print the student's name:
# student = {"name": "John", "age": 20, "grade": "A"}
# print(student["name"])  # Output: John

# # 2. Add a new key-value pair for the student's email and print the updated dictionary:
# student["email"] = "john@example.com"
# print(student)  # Output: {'name': 'John', 'age': 20, 'grade': 'A', 'email': 'john@example.com'}

# # 3. Delete the "grade" key from the dictionary and print the result:
# del student["grade"]
# print(student)  # Output: {'name': 'John', 'age': 20, 'email': 'john@example.com'}

# # 4. Create a dictionary with 3 items ({'a': 1, 'b': 2, 'c': 3}). Print all keys, values, and key-value pairs:
# my_dict = {'a': 1, 'b': 2, 'c': 3}
# print(my_dict.keys())    # Output: dict_keys(['a', 'b', 'c'])
# print(my_dict.values())  # Output: dict_values([1, 2, 3])
# print(my_dict.items())   # Output: dict_items([('a', 1), ('b', 2), ('c', 3)])

# # 5. Check if the key 'd' exists in the dictionary. If not, add it with a value of 4:
# if 'd' not in my_dict:
#     my_dict['d'] = 4
# print(my_dict)  # Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}

# # 6. Merge two dictionaries: {'x': 10} and {'y': 20}:
# dict1 = {'x': 10}
# dict2 = {'y': 20}
# merged_dict = {**dict1, **dict2}
# print(merged_dict)  # Output: {'x': 10, 'y': 20}

# # 7. Use a loop to print all key-value pairs in a dictionary:
# for key, value in my_dict.items():
#     print(key, value)
# # Output:
# # a 1
# # b 2
# # c 3
# # d 4

# # **Tuples (3 Exercises)**

# # 1. Create a tuple with your three favorite fruits. Print the second fruit:
# fruits = ("apple", "banana", "cherry")
# print(fruits[1])  # Output: banana

# # 2. Try to change an element in the tuple and observe what happens:
# # Tuples are immutable, so the following line will raise an error:
# # fruits[1] = "orange"  # TypeError: 'tuple' object does not support item assignment

# # 3. Convert a tuple ((10, 20, 30)) to a list, add a new element, and convert it back to a tuple:
# my_tuple = (10, 20, 30)
# my_list = list(my_tuple)
# my_list.append(40)
# my_tuple = tuple(my_list)
# print(my_tuple)  # Output: (10, 20, 30, 40)

# # **General Practice with Loops and Data Structures (4 Exercises)**

# # 1. Write a program to count the number of words in a list (['apple', 'banana', 'apple']):
# words = ['apple', 'banana', 'apple']
# word_count = len(words)
# print(word_count)  # Output: 3

# # 2. Create a nested dictionary for books: {'Book1': {'author': 'A', 'year': 2020}}. Print the author of Book1:
# books = {'Book1': {'author': 'A', 'year': 2020}}
# print(books['Book1']['author'])  # Output: A

# # 3. Create a nested list ([[1, 2], [3, 4]]). Use nested loops to print all elements:
# nested_list = [[1, 2], [3, 4]]
# for sublist in nested_list:
#     for item in sublist:
#         print(item)
# # Output:
# # 1
# # 2
# # 3
# # 4

# # 4. Create a dictionary of friends and their ages. Use a loop to print friends over the age of 20:
# friends = {'Alice': 25, 'Bob': 19, 'Charlie': 30}
# for name, age in friends.items():
#     if age > 20:
#         print(name)
# # Output:
# # Alice
# # Charlie

# # **Additional Exercises**
# # 1. Create a list of the first 10 cube numbers using list comprehension:
# cubes = [x**3 for x in range(1, 11)]
# print(cubes)  # Output: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

# # 2. Filter out numbers greater than 5 from the list [1, 3, 5, 7, 9]:
# numbers = [1, 3, 5, 7, 9]
# filtered_numbers = [num for num in numbers if num <= 5]
# print(filtered_numbers)  # Output: [1, 3, 5]

# # 3. Create a list of uppercase words from ['hello', 'world', 'python']:
# words = ['hello', 'world', 'python']
# uppercase_words = [word.upper() for word in words]
# print(uppercase_words)  # Output: ['HELLO', 'WORLD', 'PYTHON']

# # 4. Create a dictionary of 3 people and their ages. Print all keys and values:
# people = {'Alice': 25, 'Bob': 30, 'Charlie': 35}
# print(people)  # Output: {'Alice': 25, 'Bob': 30, 'Charlie': 35}

# 5. Use .items() to iterate through a dictionary of fruits and their prices ({'apple': 2, 'banana': 1}):
fruits = {'apple': 2, 'banana': 1}
for fruit, price in fruits.items():
    print(f"{fruit}: {price}")

for key, value in fruits.items():
    print(f"{key}: {value}")

# Output:
# apple: 2
# banana: 1

# 6. Add a new key-value pair to a dictionary and print the updated keys and values:
fruits['orange'] = 3
print(fruits)  # Output: {'apple': 2, 'banana': 1, 'orange': 3}

# 7. Create a list of dictionaries to store 3 books with title, author, and year. Print all titles:
books = [
    {'title': 'Book1', 'author': 'Author1', 'year': 2020},
    {'title': 'Book2', 'author': 'Author2', 'year': 2021},
    {'title': 'Book3', 'author': 'Author3', 'year': 2022}
]
for book in books:
    print(book['title'])
# Output:
# Book1
# Book2
# Book3

# 8. Create a dictionary of lists to store 2 people and their favorite colors. Print one person’s favorite colors:
people_colors = {
    'Alice': ['red', 'blue'],
    'Bob': ['green', 'yellow']
}
print(people_colors['Alice'])  # Output: ['red', 'blue']

# 9. Write a program to add a new record to a list of dictionaries:
people = [{'name': 'Alice', 'age': 25}, {'name': 'Bob', 'age': 30}]
new_person = {'name': 'Charlie', 'age': 35}
people.append(new_person)
print(people)  
# Output: [{'name': 'Alice', 'age': 25}, {'name': 'Bob', 'age': 30}, {'name': 'Charlie', 'age': 35}]
