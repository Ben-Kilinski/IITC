/*--------------------------------Nested Loops(Omer)



Exercise 1: Star Pattern
Objective: Create a program that prints a right triangle pattern of stars (*).
Instructions:
Use two nested loops. The outer loop should iterate through numbers 1 to 5 (representing the row number).
The inner loop should print stars equal to the current row number.
Each row should end with a new line.
Example Output: 
*
**
***
****
*****



Exercise 2: Multiplication Table
Objective: Write a program that prints a multiplication table for numbers 1 through 5.
Instructions:
Use two nested for loops. The outer loop should iterate through numbers 1 to 5.
The inner loop should also iterate through numbers 1 to 5.
Multiply the numbers from the outer and inner loops and print the result.
Example Output:
Copy code
1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25

Exercise 3: Array Search
Objective: Find a specific number in a 2D array and print its position.
Instructions:
Create a 2D array (e.g., let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];).
Use two nested loops to iterate over the elements of the array.
Check each element to see if it matches the target number.
If the target number is found, print its position (row and column).
Example Output:
For target = 5, output: Found 5 at position (1, 1)
For target = 7, output: Found 7 at position (2, 0) 


Exercise 4: Count Vowels and Consonants
Objective: Write a program to count the number of vowels and consonants in a given string.
Instructions:
Take a string as input.
Use a loop to iterate over each character in the string.
Use another loop (or a set of conditions) to check if the character is a vowel or consonant.
Keep a count of vowels and consonants.
for simplicity,string should contain only letters.
Example Output:
For input = "hello", output: Vowels: 2, Consonants: 3
For input = "world", output: Vowels: 1, Consonants: 4
*/
/*let myString = "blabla"
function checkVowelsConsoants(anyString) {
    let vowals_Big = ["A", "E", "I", "O", "U"]
    let anyStringToUpperCase = anyString.toLocaleUpperCase()
    let vogNum = 0
    let consNum = 0
    for (let i = 0; i < anyString.length; i++) {
        if (vowals_Big.includes(anyStringToUpperCase[i])) { vogNum++ }
        else { consNum++ }
    }
    console.log(`${anyString} - Vowels: ${vogNum}, Consoants: ${consNum}`)
}
checkVowelsConsoants(myString)

/*Exercise 5: Reverse a String
Objective: Write a program that reverses a given string using nested loops.
Instructions:
Take a string as input.
Use a loop to iterate over each character in the string.
Use a nested loop to reverse the string by iterating from the end to the beginning.
Example Output:
For input = "hello", output: olleh
For input = "world", output: dlrow */

/*function reverseString(word) {
    let letters = ""
    for (let i = word.length - 1; i >= 0; i--) {
        letters += word[i]
    }
    console.log(letters)
}
let singer = "Bob Dylan"
reverseString(singer)

/*
Exercise 6: Number Pyramid
Objective: Create a program that prints a number pyramid.
Instructions:
Use nested loops to print a pyramid of numbers.
The outer loop should iterate through the number of rows (e.g., 5).
The inner loop should print numbers from 1 up to the current row number.
Example Output:
1
12
123
1234
12345 */
/*for (let i = 1; i <= 5; i++) {
    let rows = " "
    for (let j = 1; j <= i; j++) {
        rows += j
    }
    console.log(rows)
}

/* Exercise 7: Sum of 2D Array Elements
Objective: Calculate the sum of all elements in a 2D array.
Instructions:
Create a 2D array with numbers.
Use nested loops to iterate over each element.
Sum all the elements and print the total.
Example Output:
For arr = [[1, 2], [3, 4], [5, 6]], output: Sum: 21*/
/*let arr = [[1, 2], [3, 4], [5, 6]]
let sum7 = 0
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum7 += arr[i][j]
    }
}
console.log(sum7)


//-------------------------DONT----------------------------------------------------------
/*Exercise 8: Character Frequency !!!!!!!!!!!!!!!!!DONT DO IT!!!!!!!!!!!!!!!!!!!!!!!
    Objective: Write a program to find the frequency of each character in a string.
    Instructions:
    Take a string as input.
    Use nested loops to count the frequency of each character.
    Print each character and its frequency.
    Example Output:
    For input = "hello", output: h: 1, e: 1, l: 2, o: 1*/
let input = "hello"
function countFreq(str) {
    let freqObject = {};
    for (let i = 0; i < str.length; i++) { //h
        if (!freqObject[str[i]]) { // if countFreq.h DO NOT exist!
            for (let j = 0; j < str.length; j++) { // h-e-l-l-o
                if (str[i] === str[j]) {
                    if (!freqObject[str[i]]) {
                        freqObject[str[i]] = 1
                    } else {
                        freqObject[str[i]]++
                    }
                }
            }
        }
    }
    console.log(freqObject)
}
countFreq(input)
//---------------------------------DONT---------------------------------------------------

/*Exercise 9: Flatten a 2D Array
Objective: Convert a 2D array into a 1D array.
Instructions:
Create a 2D array with some numbers.
Use nested loops to iterate over each element.
Store all elements in a new 1D array and print the result.
Example Output:
For arr = [[1, 2], [3, 4], [5, 6]], output: [1, 2, 3, 4, 5, 6]*/
/*let arr1 = [[1, 2], [3, 4], [5, 6]]
let arr2 = []
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        arr2.push(arr1[i][j])
    }
}
console.log(arr2)

/*Exercise 10: Matrix Transpose
Objective: Transpose a given matrix.
Instructions:
Create a 2D array representing a matrix.
Use nested loops to switch the rows and columns of the matrix.
Print the transposed matrix.
Example Output:
For matrix = [[1, 2, 3], [4, 5, 6]], output: [[1, 4], [2, 5], [3, 6]]*/
/*let myMatrix = [[1, 2, 3], [4, 5, 6]] // 2rows and 3columns
let my_New_Matrix = []
function tranpose_matrix() {

    for (let i = 0; i < myMatrix.length; i++) {
        my_New_Matrix[i] = []
        for (let j = 0; j < myMatrix[i].length; j++) {
            my_New_Matrix[i][j] = myMatrix[j][i]
        }
    }
    console.log(my_New_Matrix)
}

/*Exercise 11: Palindrome Check
Objective: Check if a given string is a palindrome.
Instructions:
Take a string as input.
Use nested loops to compare characters from the beginning and end of the string.
Print whether the string is a palindrome.
Example Output:
For input = "radar", output: Palindrome
For input = "hello", output: Not a palindrome*/
/* MY SOLUTION
function isPalindrome(word) {
    let letters = ""
    for (let i = word.length - 1; i >= 0; i--) {
        letters += word[i]
    }
    if (letters === word) {
        console.log(`${word} is a palindrome!`)
    }
    else (console.log(`${word} is not a palindrome :_:`))
}
let natan = "nathan"
isPalindrome(natan)*/
/* Maor solution
function palindromeCheck(str){
    for (let i = 0; i <= str.length / 2; i++){
        for (let j = str.length; j >= str.length / 2; j--){
            if (str[i - 1] !== str[j - 1] && i + j === str.length + 1){
                isPalindrome = false; 
                break;
            }
            if (!isPalindrome){
                break
            }
        }
    }
    if (isPalindrome) console.log("palindrome")
    else {console.log("Not a palindrome")}
}*/

/*Exercise 12: Find Common Elements in Two Arrays
Objective: Find common elements between two arrays.
Instructions:
Create two arrays with numbers.
Use nested loops to find and print the common elements.
Example Output:
For arr1 = [1, 2, 3, 4] and arr2 = [3, 4, 5, 6], output: Common elements: 3, 4*/
/*arrNum1 = [1, 2, 3, 4]
arrNum2 = [3, 4, 5, 6]
function commomElements(array1, array2) {
    let commomElementsArray = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                commomElementsArray.push(array1[i])
            }
        }
    }
    console.log(`Commom elements: ${commomElementsArray}`)
}
commomElements(arrNum1, arrNum2)

/*Exercise 13: Check for Prime Numbers in a Range
Objective: Write a program to find all prime numbers in a given range.
Instructions:
Take a range (start and end) as input.
Use nested loops to check each number in the range.
Print the prime numbers found.
Example Output:
For range = (10, 20), output: Prime numbers: 11, 13, 17, 19*/
/*let num1 = prompt("How many prime number from: ")
let num2 = prompt("to: ")
function primesCounter(from, to) {
    let primNums = []
    for (let i = from; i <= to; i++) {
        if (i % 2 != 0 && i % 3 != 0) {
            primNums.push(i)
        }
    }
    console.log(`The prime numbers are: ${primNums}`)
}
primesCounter(num1, num2)


/*Exercise 14: Sort a 2D Array by Row Sum
Objective: Sort the rows of a 2D array based on the sum of their elements.
Instructions:
Create a 2D array with numbers.
Use nested loops to calculate the sum of each row.
Sort the rows based on their sum and print the sorted array.
Example Output:
For arr = [[3, 1, 2], [1, 4, 5], [2, 3, 1]], output: [[2, 3, 1], [3, 1, 2], [1, 4, 5]]
*/

