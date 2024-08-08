/*let numbers = [1, 2, 3, 4, 5];
function removeLastElement(arr) {
  arr.pop()
  return arr
}
console.log(removeLastElement(numbers));


let unsortedNumbers = [5, 3, 8, 1, 2];
function sortArray(arr) {
  return arr.sort()
}
console.log(sortArray(unsortedNumbers))

let numbers2 = [1, 2, 3, 4, 5];
function filterEvenNumbers(arr) {
  const isEven = (element) => element % 2 === 1 || element === 1
  return arr.filter(isEven)
}
console.log(filterEvenNumbers(numbers2))
*/
const myArray = [1, 2, 3, 4, 5]
function chunks(array, chunksNum) {
  const finalArray = []
  for (let i = 0; i < array.length; i+=chunksNum) {
    finalArray.push(array.slice(i, i+chunksNum))
  }
  return finalArray
}
console.log(chunks(myArray, 2))