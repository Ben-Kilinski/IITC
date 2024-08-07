let numbers = [1, 2, 3, 4, 5];
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