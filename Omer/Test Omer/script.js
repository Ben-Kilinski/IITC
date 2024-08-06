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
    for (let i = 0; i < students.length; i++){
        ages.push(students[i].age)
    }
    return ages
  }
console.log("Student Ages:", getStudentAges(students));
//-----------------------------------------------------------------------

console.log("\n" + "7)")

console.log("\n" + "8)")

console.log("\n" + "9)")

console.log("\n" + "10)")

console.log("\n" + "11)")

console.log("\n" + "12)")

console.log("\n" + "13)")

console.log("\n" + "14)")

console.log("\n" + "15)")

