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
/*const myArray = [1, 2, 3, 4, 5]
function chunks(array, chunksNum) {
  const finalArray = []
  for (let i = 0; i < array.length; i+=chunksNum) {
    finalArray.push(array.slice(i, i+chunksNum))
  }
  return finalArray
}
console.log(chunks(myArray, 2))

const arr12 = [0, 1, 2, [3, [4, 5]]];

console.log(arr12.flat());
// expected output: Array [0, 1, 2, 3, 4]*/

const array22 = [1, 2, 3, 4, 5, 5, 5, 5]
const array33 = [3, 5, 2, 6, 8, 2, 10]
function findCommomNums(array1, array2) {
  const commmomns = []
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j] && !commmomns.includes(array2[j])) {
        commmomns.push(array2[j])
      }
    }
  }
  return commmomns
}
console.log(findCommomNums(array22, array33))

function findCommonNums(array1, array2) {
  const set1 = new Set (array1)
  const commmons = []
  for(const num of array2) {
    if (set1.has(num)){
      commmons.push(num)
      set1.delete(num)
    }
  }
  return commmons
}
console.log(findCommonNums(array22, array33))