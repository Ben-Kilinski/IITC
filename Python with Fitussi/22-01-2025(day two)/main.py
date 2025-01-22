# movies = ["Jurassic Park", "Indiana Jones", "Back to the Future", "Pirates of the Carebbean", "Harry Potter"]
# movies.append("American Sniper")
# print(movies)
# movies.remove("Pirates of the Carebbean")
# print(movies)

#tuple
# birthday = (10, 3, 1997)
# birthday.remove(3)
# print(birthday)

ben = {
    "age" : 27, 
    "name" : "Ben", 
    "lname" : "Kilinski", 
    "occupation" : "student", 
    "sibus" : False
}


print(ben['age'])
ben["book"] = "Harry Potter"
print(ben)
del ben["sibus"]
print(ben)