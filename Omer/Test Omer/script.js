"use strict";
console.log("                          Answers")

console.log("\n" + "1)")
// 😅 Task 1: Update Student Age 😅
// TODO: Write a function to update the student's age (You can mutate the original object)
const student_1 = {
    name: "John",
    age: 17,
    grades: {},
};
function updateAge(student, newAge) {
    student.age = newAge
    return student
}
updateAge(student_1, 18);
console.log("Updated Student:", student_1);
//------------------------------------------------------------

console.log("\n" + "2)")
// 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
const product_1 = {
    name: "Phone",
    categories: ["electronics"],
    isAvailable: false,
};
function addCategory(product, category) {
    product.categories.push(category)
    return product
}
addCategory(product_1, "gadgets");
console.log("Updated Product:", product_1);
//---------------------------------------------------------------------

console.log("\n" + "3)")
// 😅 Task 3: Check Product Availability 😅
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
function isProductAvailable(product) {
    if (product.isAvailable) {
        console.log()
    } else {
        console.log("Is Product Available: no")
    }
}
isProductAvailable(product_1);
//-----------------------------------------------------------------------
console.log("\n" + "4)")
// 🙂 Task 4: Find Product by Name 🙂
// TODO: Write a function to find a product by name
const myProducts = [
    { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
    { name: "Shirt", price: 500, categories: ["clothing"] },
    { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
];
function findProductByName(products, productName) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            return products[i]
        }
    }
}
console.log("Found Product:", findProductByName(myProducts, "Phone"));
//-------------------------------------------------------------------------

console.log("\n" + "5)")
// 🙂 Task 5: Count Products in Category 🙂
// TODO: Write a function to count the number of products in a category
function countProductsInCategory(products, category) {
    let counter = 0
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].categories.length; j++) {
            if (products[i].categories[j] === category) {
                counter += 1
            }
        }
    }
    return counter
}
console.log("Products in Electronics:", countProductsInCategory(myProducts, "electronics"));
//-------------------------------------------------------------

console.log("\n" + "6)")
// 🙂 Task 6: Get Student Ages 🙂
// TODO: Write a function to get an array of student ages
const students = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 19 },
];
function getStudentAges(students) {
    const ages = []
    for (let i = 0; i < students.length; i++) {
        ages.push(students[i].age)
    }
    return ages
}
console.log("Student Ages:", getStudentAges(students));
//-----------------------------------------------------------------------

console.log("\n" + "7)")
// 🤨 Task 7: Get Products by Category 🤨
// TODO: Write a function to get products by category
/*const myProducts = [
    { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
    { name: "Shirt", price: 500, categories: ["clothing"] },
    { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
  ];*/
function getProductsByCategory(products, category) {
    let products_on_this_category = []
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].categories.length; j++) {
            if (products[i].categories[j] === category) {
                products_on_this_category.push(products[i].name)
            }
        }
    }
    return products_on_this_category
}
console.log("Electronics Products:", getProductsByCategory(myProducts, "electronics"));
//------------------------------------------------------------------

console.log("\n" + "8)")
// 🤨 Task 8: Get Average product prices 🤨
// TODO: Write a function to get the average price of all products
function getAveragePrice(products) {
    let sum = 0
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price
    }
    let average_price = sum / products.length
    return average_price
}
console.log("Average Price:", getAveragePrice(myProducts));
//-----------------------------------------------------------

console.log("\n" + "9)")
// 🤨 Task 9: Add Grade to Student 🤨
// TODO: Write a function to add a grade to a student (You can mutate the original object)
/*const student_1 = {
    name: "John",
    age: 17,
    grades: {},
  };*/

function addGrade(student, subject, grade) {
    student.grades[subject] = grade
    //return student_1
}
addGrade(student_1, "math", 85)
console.log("Updated Student:", student_1);
//-------------------------------------

console.log("\n" + "10)")
// 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
const strings = [
    "baba",
    "my success",
    "no more lives",
    "and of session",
    "good discussion",
];
function countCharacterOccurrences(strings, char) {
    let counter = 0;
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings[i].length; j++) {
            if (strings[i][j] === char) {
                counter++
            }
        }
    }
    return counter
}
console.log("Occurrences of 's':", countCharacterOccurrences(strings, "s"));
console.log("Occurrences of 'b':", countCharacterOccurrences(strings, "c"));
//---------------------------------------------------------------------

console.log("\n" + "11)")
// 😥 Task 11: Update Product Price by Name 😥
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
/*const myProducts = [
    { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
    { name: "Shirt", price: 500, categories: ["clothing"] },
    { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
  ];*/

function updatePriceByName(products, productName, newPrice) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            products[i].price = newPrice
            return products[i].price
        }
    }
}
console.log("Laptop's new price is " + updatePriceByName(myProducts, "Laptop", 890))
//------------------------------------------------------------------------

console.log("\n" + "12)")
// 😥 Task 12: Get Uppercase Strings 😥
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
/*const strings = [
    "baba",
    "my success",
    "no more lives",
    "and of session",
    "good discussion",
  ];*/

function getUppercaseStrings(strings) {
    let newArray = []
    for (let i = 0; i < strings.length; i++) {
        newArray.push(strings[i].toUpperCase())
    }
    return newArray
}
console.log("Uppercase Strings:", getUppercaseStrings(strings));
//---------------------------------------------------------------------

console.log("\n" + "13)")
// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.
/*const strings = [
    "baba",
    "my success",
    "no more lives",
    "and of session",
    "good discussion",
  ];*/
function groupStringsBySpaces(strings) {
    let newObject = {}
    for (let i = 0; i < strings.length; i++) {
        let counter = 0
        for (let j = 0; j < strings[i].length; j++){
            if (strings[i][j] === " ") {
                counter++
            }
        if (newObject[`${counter}`] === undefined) {
            newObject[`${counter}`] = []
            }
        }
        newObject[`${counter}`].push(strings[i])
    }
    return newObject
}
console.log("Grouped Strings By Spaces:", groupStringsBySpaces(strings));


console.log("\n" + "14)")

console.log("\n" + "15)")

