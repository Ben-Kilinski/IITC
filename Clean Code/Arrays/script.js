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

/*const array22 = [1, 2, 3, 4, 5, 5, 5, 5]
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
console.log(findCommonNums(array22, array33))*/


//   Ziping arrays
/*
const arrayX = [1, 2, 7];
const arrayY = [4, 5];
function zipArrays(array1, array2) {
  let biggerArray, smallerArray;
  
  // Determinar qual array é o maior
  if (array1.length >= array2.length) {
    biggerArray = array1;
    smallerArray = array2;
  } else {
    biggerArray = array2;
    smallerArray = array1;
  }

  const zipArray = [];
  
  for (let i = 0; i < biggerArray.length; i++) {
    const pair = [biggerArray[i], smallerArray[i]];

    // Substitui undefined por "null"
    if (pair[1] === undefined) {
      pair[1] = "null";
    }

    zipArray.push(pair);
  }

  return zipArray;
}
console.log(zipArrays(arrayX, arrayY));
*/


//    Find pair with target sum
/*const baba = [2, 4, 3, 5, 7]
function findPairTargetSum(arr, sum) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push(arr[i], arr[j])
        return result
      }
    }
  }
}
console.log(findPairTargetSum(baba, 9))
*/

/*function removeDuplicates(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i+1]){
      result.push(arr[i])
    }
  }
  return result 
}
const result = removeDuplicates([1, 1, 2, 2, 3, 4, 4]);
console.log(result); // [1, 2, 3, 4]


const arrayComRepetidos = [1, 2, 3, 2, 4, 3, 5];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(arrayComRepetidos));
*/

// find the first unique element 
/*function findFirstUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i]
    }
  }
}
const result = findFirstUnique([1, 2, 2, 1, 3, 4]);
console.log(result); // 3
*/

// incremenmt array as number 
/*function incrementArrayAsNumber(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    } else arr[i] = 0;
  }
  arr.unshift(1);
  return arr;
}

const result = incrementArrayAsNumber([1, 2, 9]);
console.log(result); // [1, 3, 0]*/

function findFirstOddIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      return arr.indexOf(arr[i])
    }
  }
}
const numbers = [2, 4, 6, 8, 9, 12, 15];
console.log(findFirstOddIndex(numbers)); // Should return 4