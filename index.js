//IITC 23.07.2024 - Home work

//----------------Variable Declaration and Boolean Expressions

//1 - Declare Variables
//Declare two variables, firstName and lastName, and assign them your first and last name as string values.
let firstName = "John";
let lastName = "Kilinski";
//Declare a variable age and assign it your age as a number.
let age = 55;
//Declare a variable isStudent and assign it a boolean value (true if you are a student, false otherwise).
let isStudent = true;

//2 - Boolean Expressions
//Write a boolean expression to check if age is greater than 18. Assign the result to a variable isAdult.
let isAgeGreaterThan18 = age >= 18
if (isAgeGreaterThan18) console.log("You're an adult")
else console.log("You're a teenager")
//Write a boolean expression to check if firstName is equal to "John". Assign the result to a variable isJohn.
let isFirstName = firstName === "John";
if (isFirstName) console.log("Hello John"); else console.log("You're not John")


//--------------------------Functions and String Methods
// Write a Function:
//Write a function named greet that takes two parameters, firstName and lastName.
//Inside the function, create a variable fullName that concatenates firstName and lastName with a space in between.
//Return a greeting message that says, "Hello, fullName! Welcome to the IITC Bootcamp."
//String Methods:
//Inside the greet function, convert the fullName to uppercase before returning the greeting message.let fullName = firstName + " " + lastName;
let fullName = firstName + lastName
function greet(firstName, lastName) {
    console.log(`Hello ${fullName.toLocaleUpperCase()}! Welcome to the IITC Bootcamp`)
}
greet()

//----------------------------Conditions
//If and Else:
//Write a function named checkAge that takes one parameter, age.
//Inside the function, use an if-else statement to check:
//If age is less than 13, return "You are a child."
//If age is between 13 and 17 (inclusive), return "You are a teenager."
//If age is between 18 and 64 (inclusive), return "You are an adult."
//If age is 65 or older, return "You are a senior."

function checkAge(age) {
    if (age < 13) return "You are a child"
    else if (age >= 13 && age <= 17) return "You are a teenager"
    else if (age >= 18 && age <= 64) return "You are an adult"
    else return "You are a senior"
}
console.log(checkAge(age))










