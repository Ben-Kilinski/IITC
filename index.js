//IITC 23.07.2024 - Home work

//----------------Variable Declaration and Boolean Expressions

//1 - Declare Variables
//Declare two variables, firstName and lastName, and assign them your first and last name as string values.
let firstName = "ben";
let lastName = "kilinski";
//Declare a variable age and assign it your age as a number.
let age = 25;
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

// Switch Statement:
// Write a function named getDayMessage that takes one parameter, dayOfWeek.
// Inside the function, use a switch statement to return a message for each day of the week (Monday to Sunday).
// Example: If dayOfWeek is "Monday", return "Start of the work week!"
// If dayOfWeek is not recognized, return "Invalid day!"

let dayOfWeek = "hello";
function getDayMessage(dayOfWeek) {
    switch (dayOfWeek) {
        case "sunday": return `Today is ${dayOfWeek}`;
        case "monday": return `Today is ${dayOfWeek}`;
        case "tuesday": return `Today is ${dayOfWeek}`;
        case "weensday": return `Today is ${dayOfWeek}`;
        case "thursday": return `Today is ${dayOfWeek}`;
        case "friday": return `Today is ${dayOfWeek}`;
        case "saturday": return `Today is ${dayOfWeek}`;
        default: return "Dia inválido"
    }
}
console.log(getDayMessage(dayOfWeek))

// Complex Conditions:
// Write a function named checkEligibility that takes two parameters, age and isStudent.
// Inside the function, use a series of if-else statements to check the following:
// -If age is less than 18 and isStudent is true, return "You are a minor student."
// -If age is less than 18 and isStudent is false, return "You are a minor non-student."
// -If age is between 18 and 24 and isStudent is true, return "You are a young adult student."
// -If age is between 18 and 24 and isStudent is false, return "You are a young adult non-student."
// If age is 25 or older and isStudent is true, return "You are an adult student."
// If age is 25 or older and isStudent is false, return "You are an adult non-student."

function checkElegibility(age, isStudent) {
    if (age < 18 && isStudent) return "You are a minor student."
    else if (age < 18 && !isStudent) return "You are a minor non-student."
    else if (age >= 18 && age <= 24 && isStudent) return "You are a young adult student."
    else if (age >= 18 && age <= 24 && !isStudent) return "You are a young adult non-student."
    else if (age >= 25 && isStudent) return "You are an adult student."
    else return "You are an adult non-student."
}
console.log(checkElegibility(age, isStudent))

//------------------- String Comparison and Manipulation:
// Write a function named formatName that takes one parameter, name.
// Inside the function, use trim() to remove any leading or trailing whitespace from the name.
// Use toLowerCase() to convert the name to lowercase.
// Check if the formatted name is equal to "admin":
// If true, return "Welcome, Admin!"
// Else, return "Hello, name!"

let userName = "              admin"
function formatName(name) {
    //console.log(name.trim())
    if (userName.trim() === "admin") return "Welcome, admin!"
    else return `Hello, ${userName.trim()}!`
}
console.log(formatName(userName))

// ------------------Nested If Statements:
// Write a function named checkDiscount that takes two parameters, age and isMember.
// Inside the function, use nested if statements to determine the discount:
// If age is less than 18:
// If isMember is true, return "You get a 20% discount."
// Else, return "You get a 10% discount."
// If age is 65 or older:
// If isMember is true, return "You get a 30% discount."
// Else, return "You get a 20% discount."
// If age is between 18 and 64:
// If isMember is true, return "You get a 10% discount."
// Else, return "No discount available."

let isMember = false
function checkDiscount(age, isMember) {
    if (age<18){
        if(isMember) return "You get a 20% discount"
        else return "You get a 10% discount"
    }
    if (age>=65){
        if(isMember) return "You get a 30% discount"
        else return "You get a 20% discount"
    }
    if (18<= age <=64){
        if(isMember) return "You get a 10% discount"
        else return "No discount available"
    }
}
console.log(checkDiscount(age, isMember))

// Login Validation:
// Write a function named validateLogin that takes two parameters, username and password.
// Inside the function, create a variable storedUsername and assign it a string value representing the correct username.
// Create a variable storedPassword and assign it a string value representing the correct password.
// Use an if-else statement to check:
// If username is equal to storedUsername and password is equal to storedPassword, return "Login successful."
// Else, return "Invalid username or password."

let username = "Master Yoda"
let password = "1234"
function validateLogin(username, password){
    let storedUsername = "Master Yoda"
    let storedPassword = "1234"
    if (username === storedUsername && password === storedPassword) return "Login successful."
    else return "Invalid username or password."
}
console.log(validateLogin(username, password))

// ----------------------------Substring Extraction:
// Write a function named extractInitials that takes two parameters, firstName and lastName.
// Inside the function, use the charAt and toUpperCase methods to extract the first letter of each name and convert them to uppercase.
// Return a string that combines the initials with a dot in between, like "J.D."
function extractInitials(firstName, lastName){
    let firstInitial = firstName.charAt(0)
    let secondInitial= lastName.charAt(0)
    return `${firstInitial.toLocaleUpperCase()}.${secondInitial.toLocaleUpperCase()}.`
}
console.log(extractInitials(firstName, lastName))

//-------------------------------- String Replacement:
// Write a function named maskEmail that takes one parameter, email.
// Inside the function, use the replace method to replace the part of the email before the "@" symbol with "*****".
// Return the masked email.





// Nested If-Else:
// Write a function named gradeCalculator that takes one parameter, score.
// Inside the function, use nested if-else statements to determine the grade:
// If score is greater than or equal to 90, return "A".
// Else if score is greater than or equal to 80, return "B".
// Else if score is greater than or equal to 70, return "C".
// Else if score is greater than or equal to 60, return "D".
// Else, return "F".
// Complex Boolean Conditions:
// Write a function named canVote that takes two parameters, age and isCitizen.
// Inside the function, use a complex boolean expression to check:
// If age is 18 or older and isCitizen is true, return "You are eligible to vote."
// Else, return "You are not eligible to vote."
// String and Number Conversion:
// Write a function named convertToUpperCaseAndAddAge that takes two parameters, name and age.
// Inside the function, use the toUpperCase method to convert the name to uppercase.
// Convert the age to a string and concatenate it with the uppercase name.
// Return the resulting string, like "JOHN25".

// Capitalize First Letter:
// Write a function named capitalize that takes one parameter, word.
// Inside the function, capitalize the first letter of the word and keep the rest of the word unchanged.
// Return the resulting string.
// Hint: You can use the charAt method to get the first character and the substring method to get the rest of the word. Combine these with the toUpperCase method to achieve the desired result.

// Check Substring:
// Write a function named containsSubstring that takes two parameters, mainString and subString.
// Inside the function, check if mainString contains subString.
// Return true if it does, otherwise return false.
// Hint: You can use the includes method to check if the substring exists within the main string.



