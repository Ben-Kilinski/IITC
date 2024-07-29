//--------------------------------Arrays---------------------------//

//1: Create an array of your five favorite foods
let myFavoriteFoods = ["hamburguer", "pizza", "chipps", "cold coffe", "lasagna"]

//2: Access and print the third item in your favorite foods array
console.log(myFavoriteFoods[2])

//3: Change the second item in your array to a different food 
myFavoriteFoods[1] = "ravioli"
console.log(myFavoriteFoods)

//4: Add a new food to the end of your array using push()
myFavoriteFoods.push("poke")
console.log(myFavoriteFoods)

//5: Remove the first food from your array using shift()
myFavoriteFoods.shift(0)
console.log(myFavoriteFoods);

//6: Create a loop that prints all the foods in your array 
for (i = 0; i < myFavoriteFoods.length; i++) {
    console.log(myFavoriteFoods[i])
}

//7 Find the index of a specific food in your array using indexOf()
console.log(myFavoriteFoods.indexOf("cold coffe"))

//8: Create an array of numbers and use a loop to calculate their sum 
let myNumbers = [1, 7, 12]
let sum = 0
for (i = 0; i < myNumbers.length; i++) {
    sum += myNumbers[i]
}
console.log(sum)
