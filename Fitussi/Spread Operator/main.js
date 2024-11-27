// # Exercises

// ### **Spread Operator with Arrays**

// ### **Basic Array Operations (Beginner)**
console.log("Basic Array Operations");
// 1. **Exercise**: Create a new array by copying an existing array using the spread operator.
//     **Hint**: Use `[...array]` to spread elements of `array` into a new array.

const students =  ["Ben", "Joe", "Sandy", "Paul", "Alfred"];
const NewStudents = [...students];
console.log(students);

    
// 2. **Exercise**: Combine two arrays into one using the spread operator.
//     **Hint**: Use `[...array1, ...array2]` to merge both arrays into a new array.
const students2 =  ["Ben", "Joe", "Sandy", "Paul", "Alfred"];
const letters = ["A", "B", "C", "D"];
const combinedArrays = [...students2, ...letters];
console.log(combinedArrays);
    
    
// 3. **Exercise**: Add new elements to the beginning of an array using the spread operator.
//     **Hint**: Combine the new element(s) with the existing array: `[newElement, ...array]`.
const students3 = ["Bob", "Mark", "Clara", ...students2];
console.log(students3);


// 4. **Exercise**: Add new elements to the end of an array using the spread operator.
//     **Hint**: Combine the existing array with the new element(s): `[...array, newElement]`.
const students4 = [...students3, "Mia", "Roberto"];
console.log(students4);
    
// 5. **Exercise**: Merge three arrays into a single array using the spread operator.    
//     **Hint**: Use `[...array1, ...array2, ...array3]`.
const students5 = [...students, ...students2, ...students3];
console.log("students5: ", students5);
    
// 6. **Exercise**: Copy an array and add a single element to it.
    
//     **Hint**: Use `[...array, newElement]`.
    
// 7. **Exercise**: Remove the first element of an array and create a new array with the rest using the spread operator.
    
//     **Hint**: Use `array.slice(1)` or `[...array.slice(1)]`.
    
// 8. **Exercise**: Create a new array by copying only the last three elements of an array.
    
//     **Hint**: Use `array.slice(-3)` to get the last three elements, then spread them.
    
// 9. **Exercise**: Reverse an array without mutating the original array using the spread operator.
    
//     **Hint**: Combine `[...array]` and `.reverse()`.
    
// 10. **Exercise**: Replace the second element of an array with a new value while keeping the rest unchanged.
    
//     **Hint**: Use `[array[0], newValue, ...array.slice(2)]`.
    

// ---

// ### **Practical Scenarios (Intermediate)**
console.log("");
console.log("Practical Scenarios");
// 1. **Exercise**: Spread the characters of a string into an array of individual letters.
//     **Hint**: Use `[...string]` to convert the string into an array of characters.
const myName = "BEN";
const nameArray = [...myName];
console.log(nameArray);
    
// 2. **Exercise**: Flatten a nested array (one level deep) using the spread operator.
//     **Hint**: Spread the nested arrays: `[...array1, ...array2]`.
const nestedArray = [1, 2, 3, [4, 5, 6]];
const flatArray = [...nestedArray.slice(0, 3), ...nestedArray[3]];
console.log(flatArray);

// 3. **Exercise**: Create a new array that contains all elements from an array except for the last one.
//     **Hint**: Use `array.slice(0, -1)` to exclude the last element.
const array3 = [...flatArray.slice(0, -1)];
console.log(array3); //[1, 2, 3, 4, 5, 6,]

// Sintaxe do slice()
// array.slice(inicio, fim);
// inicio (obrigatório): O índice onde a extração começa (inclusivo).
// fim (opcional): O índice onde a extração termina (exclusivo), se omitido inclui todos os elementos até o final do array.
    
// 4. **Exercise**: Insert an element at the third position of an array without mutating the original array.
//     **Hint**: Combine slices with the new element: `[...array.slice(0, 2), newElement, ...array.slice(2)]`.
const new3 = "new3";
const array4 = [...array3.slice(0,2), "new3", ...array3.slice(2)];
console.log(array4);

    
// 5. **Exercise**: Use the spread operator to de-duplicate an array.
//     **Hint**: Convert the array to a `Set` and back: `[...new Set(array)]`.
const duplicateArray = [1,1,1,1,1,1,1,1,2,3,4]
const array5 = [...new Set(duplicateArray)];
console.log(array5);

    
// 6. **Exercise**: Extract the middle elements of an array into a new array using the spread operator.
    
//     **Hint**: Use `slice` to select the middle range, e.g., `array.slice(1, -1)`.
    
// 7. **Exercise**: Rotate an array (move the first element to the last position).
    
//     **Hint**: Use `[...array.slice(1), array[0]]`.
    
// 8. **Exercise**: Combine elements of an array with a string as the first element (e.g., `["Hello", ...array]`).
    
//     **Hint**: Use `[string, ...array]`.
    
// 9. **Exercise**: Create a function `mergeArrays` that accepts multiple arrays as arguments and returns one combined array.
    
//     **Hint**: Use `...args` in the function signature and `[].concat(...args)` inside.
    
// 10. **Exercise**: Create a copy of an array and shuffle its elements randomly.
    
//     **Hint**: Copy the array with `[...array]` and use `.sort(() => Math.random() - 0.5)`.
    

// ---

// ### **Spread Operator with Objects**

// ### **Basic Object Operations (Beginner)**

// 1. **Exercise**: Create a new object by copying an existing object using the spread operator.
    
//     **Hint**: Use `{...object}` to spread the properties into a new object.
    
// 2. **Exercise**: Merge two objects into a single object using the spread operator.
    
//     **Hint**: Use `{...object1, ...object2}` to combine them.
    
// 3. **Exercise**: Create a copy of an object and update one of its properties.
    
//     **Hint**: Use `{...object, property: newValue}`.
    
// 4. **Exercise**: Add a new property to an object copy while leaving the original unchanged.
    
//     **Hint**: Use `{...object, newProperty: value}`.
    
// 5. **Exercise**: Merge three objects into a single object using the spread operator.
    
//     **Hint**: Use `{...object1, ...object2, ...object3}`.
    
// 6. **Exercise**: Create a shallow copy of an object using the spread operator.
    
//     **Hint**: Use `{...object}`.
    
// 7. **Exercise**: Remove a property from an object by creating a new object without that property.
    
//     **Hint**: Use destructuring and the rest operator: `const {prop, ...rest} = object`.
    
// 8. **Exercise**: Swap the values of two properties in an object using the spread operator.
    
//     **Hint**: Use destructuring and the spread operator to create a new object with swapped values.
    
// 9. **Exercise**: Extract one property from an object into a new object using destructuring and the spread operator.
    
//     **Hint**: Use `const {prop, ...rest} = object` and return `{...rest}`.
    
// 10. **Exercise**: Replace a nested object's property while keeping the rest unchanged.
    
//     **Hint**: Use `{...object, nestedObj: {...object.nestedObj, key: value}}`.
    

// ---

// ### **Practical Scenarios (Intermediate)**

// 1. **Exercise**: Create a function `mergeObjects` that accepts multiple objects as arguments and returns one combined object.
    
//     **Hint**: Use `...args` and `Object.assign({}, ...args)`.
    
// 2. **Exercise**: Create a new object from two objects, giving precedence to the second object's properties.
    
//     **Hint**: Use `{...object1, ...object2}` to overwrite conflicts.
    
// 3. **Exercise**: Copy an object and add a new nested object to it without mutating the original.
    
//     **Hint**: Use `{...object, nested: {key: value}}`.
    
// 4. **Exercise**: Extract all but one property from an object into a new object using the spread operator.
    
//     **Hint**: Use `const {excluded, ...rest} = object`.
    
// 5. **Exercise**: Create a copy of an object and remove all properties with `null` or `undefined` values.
    
//     **Hint**: Use `Object.entries` with `filter` and `reduce`.
    
// 6. **Exercise**: Merge a configuration object into a default settings object to create a new object.
    
//     **Hint**: Use `{...defaultSettings, ...config}`.
    
// 7. **Exercise**: Spread properties from multiple objects into a new object, but skip specific properties.
    
//     **Hint**: Use `const {key, ...rest} = {...object1, ...object2}`.
    
// 8. **Exercise**: Update a nested property in an object using the spread operator.
    
//     **Hint**: Use `{...object, nestedObj: {...object.nestedObj, key: newValue}}`.
    
// 9. **Exercise**: Convert an array of key-value pairs into an object using the spread operator.
    
//     **Hint**: Use `Object.fromEntries(array)`.
    
// 10. **Exercise**: Combine user details and preferences objects while overriding specific values.
    
//     **Hint**: Use `{...user, ...preferences, specificKey: newValue}`.
    

// ---

// These exercises and hints should provide students with a clear, hands-on understanding of the spread operator for arrays and objects. Would you like to go deeper into any of these?