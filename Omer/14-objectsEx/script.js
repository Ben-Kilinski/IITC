"use strict";

// let person = {
//   name: "John",
//   age: 17,
//   address: {
//     city: "New York",
//     zip: "10001",
//   },
// };

// // TODO: Write a function to update the person's city
// function updateCity(person, newCity) {
//   person.address.city = newCity;
// }
// updateCity(person, "Los Angeles");
// console.log("Updated Person:", person);

// /////////////////////////////////////////////////////😂


// // TODO: Write a function to return an array of student names😂
// let students = [
//   { id: 1, name: "Alice", age: 20 },
//   { id: 2, name: "Bob", age: 22 },
//   { id: 3, name: "Charlie", age: 19 },
// ];
// function getStudentNames(students) {
//   let res = []
//   for (let i = 0; i < students.length; i++) {
//     res.push(" " + students[i].name);
//   }
//   return res
// }
// console.log("\n" + getStudentNames(students))

// // TODO: Write a function to find a student by ID🤣
// function getStudentById(students, id) {
//   for (let i = 0; i < students.length; i++){
//     if (students[i].id === id){
//       return students[i].name
//     }
//   }
// } 
// console.log("\n" + "Found Student:", getStudentById(students, 1));

// // TODO: Write a function to add a new student to the array
// function addStudent(students, newID, newStudent,  newAge) {
//     students.push({id: newID, name: newStudent, age: newAge})
//     return students
// }
// addStudent(students, 5, "ben", 27)
// console.log(students)

// /////////////////////////////////////////////////////😁

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// TODO: Write a function to toggle the product's availability😍
function toggleAvailability(product) {
  product.isAvailable = !product.isAvailable
}
toggleAvailability(product)
console.log("available: " + product.isAvailable)

// // TODO: Write a function to update the product's price👌
function updatePrice(product, newPrice) {
  product.price = newPrice
}
updatePrice(product, 1500);
console.log("\n" + "Updated Product:", product);

// // TODO: Write a function to remove a category from the product🙌
function removeCategory(product, category) {
  for (let i = 0; i < product.categories.length; i++){
    if (product.categories[i] === category){
      product.categories.splice(i, 1)
    }
  }
}

removeCategory(product, "tech");
console.log("\n" + "Updated Product:", product)

// /////////////////////////////////////////////////////
let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];
// TODO: Write a function to find the most expensive product✌️
function findMostExpensiveProduct(products) {
  let expensiver = 0
  for (let i = 0; i < products.length; i++){
    if (expensiver <= products[i].price){
      expensiver = products[i].name
      return expensiver
    }
  }
}
console.log("\n" + "The expensiver product is " + findMostExpensiveProduct(products))

// TODO: Write a function to return an array of only available product sizes*/
function getAvailableSizes(products){
  const availableSizes = []
  for (let i = 0; i < products.length; i++) {
    if(products[i].isAvailable){
      for (let j = 0; j < products[i].sizes.length; j++){
        if (!availableSizes.includes(products[i].sizes[j])){
          availableSizes.push(products[i].sizes[j])
        }
      }
    }
  }
  return availableSizes
}
 ;
console.log("\n" + "Available Sizes:", getAvailableSizes(products));

// /////////////////////////////////////////////////////

// let student = {
//   name: "Alice",
//   age: 20,
// };

// // TODO: Write a function to add a new property to the student object
// function addProperty(student, key, value) {
//   // your code here
// }

// // addProperty(student, "grade", "A");
// // console.log("Updated Student:", student);

// /////////////////////////////////////////////////////

// let school = {
//   name: "Greenwood High",
//   address: {
//     city: "Springfield",
//     zip: "12345",
//   },
//   students: [
//     { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
//     { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
//   ],
// };

// // TODO: Write a function to update a student's grade in a subject
// function updateStudentGrade(school, studentId, subject, newGrade) {
//   // your code here
// }

// // updateStudentGrade(school, 1, "math", 90);
// // console.log("Updated School:", school);

// /////////////////////////////////////////////////////

// let orders = [
//   { id: 1, product: "Laptop", status: "delivered" },
//   { id: 2, product: "Mouse", status: "pending" },
//   { id: 3, product: "Keyboard", status: "delivered" },
//   { id: 4, product: "Monitor", status: "pending" },
//   { id: 5, product: "Laptop", status: "shipped" },
// ];

// // TODO: Write a function to return an array of only delivered orders
// function getDeliveredOrders(orders) {
//   // your code here
// }

// // let deliveredOrders = getDeliveredOrders(orders);
// // console.log("Delivered Orders:", deliveredOrders);

// // TODO: Write a function to count the occurrences of each product in the orders
// function countProductOccurrences(orders) {
//   // your code here
// }

// // let productCounts = countProductOccurrences(orders);
// // console.log("Product Counts:", productCounts);
// /*
//   Output:
//   {
//     Laptop: 2,
//     Mouse: 1,
//     Keyboard: 1,
//     Monitor: 1
//   }
//   */