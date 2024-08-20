/*------------------------------------# JavaScript Objects - Practice Exercises

## Exercise 1: Person

1. Create an object called `person` with properties: name (string), age (number), and isStudent (boolean).
2. Access and log the name and age of the person.
3. Modify the isStudent property and log the updated object.

**Hint:** Use object literal syntax to create the object. Remember, you can access object properties using dot notation or bracket notation.

**Learn more:** [MDN Web Docs - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
*/

let person = {
    name: "ben",
    age: 27,
    isStudent: true
}
person.isStudent = false
console.log(person);



/*
## Exercise 2: Car

1. Create an object called `car` with properties: make (string), model (string), and year (number).
2. Access and log the make and model of the car.
3. Update the year of the car and log the updated object.

**Hint:** After creating the object, you can modify properties by assigning new values to them.

**Learn more:** [JavaScript.info - Objects](https://javascript.info/object)

## Exercise 3: Fruit

1. Create an object called `fruit` with properties: name (string), color (string), and sweetness (number from 1-10).
2. Access and log the name and sweetness of the fruit.
3. Change the color of the fruit and log the updated object.

**Hint:** Remember to use appropriate data types for each property. The sweetness should be a number.

**Learn more:** [W3Schools - JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

## Exercise 4: Book

1. Create an object called `book` with properties: title (string), author (string), and pages (number).
2. Access and log the title and author of the book.
3. Increase the number of pages by 50 and log the updated object.

**Hint:** To increase the number of pages, you'll need to access the current value and add to it.

**Learn more:** [MDN Web Docs - Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

## Exercise 5: Animal

1. Create an object called `animal` with properties: species (string), sound (string), and isWild (boolean).
2. Access and log the species and sound of the animal.
3. Change the isWild property and log the updated object.

**Hint:** Boolean values in JavaScript are `true` or `false` (without quotes).

**Learn more:** [JavaScript.info - Object properties configuration](https://javascript.info/object-properties)

## Exercise 6: Smartphone

1. Create an object called `smartphone` with properties: brand (string), model (string), and storageGB (number).
2. Access and log the brand and storageGB of the smartphone.
3. Update the model of the smartphone and log the updated object.

**Hint:** When logging multiple properties, you can use string concatenation or template literals.

**Learn more:** [MDN Web Docs - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Exercise 7: Recipe

1. Create an object called `recipe` with properties: name (string), ingredients (array), and preparationTime (number in minutes).
2. Access and log the name and the first ingredient of the recipe.
3. Add a new ingredient to the ingredients array and log the updated object.

**Hint:** To access the first element of an array, use index 0. To add an element to an array, you can use the `push()` method.

**Learn more:** [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Exercise 8: Movie

1. Create an object called `movie` with properties: title (string), director (string), and releaseYear (number).
2. Access and log the title and director of the movie.
3. Update the releaseYear and log the updated object.

**Hint:** Make sure to use the appropriate data type for the releaseYear (it should be a number, not a string).

**Learn more:** [JavaScript.info - Object methods, "this"](https://javascript.info/object-methods)

## Exercise 9: Country

1. Create an object called `country` with properties: name (string), capital (string), and population (number).
2. Access and log the name and capital of the country.
3. Increase the population by 1 million and log the updated object.

**Hint:** When increasing the population, remember to add the number (1000000) to the current population value.

**Learn more:** [MDN Web Docs - Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## Exercise 10: Computer

1. Create an object called `computer` with properties: brand (string), CPU (string), and RAMinGB (number).
2. Access and log the brand and CPU of the computer.
3. Double the RAMinGB and log the updated object.

**Hint:** To double a number, you can multiply it by 2 or add it to itself.

**Learn more:** [JavaScript.info - Objects](https://javascript.info/object)

Remember, practice is key to mastering JavaScript objects. Try to complete these exercises without looking at the solutions, and don't hesitate to use console.log() to check your work at each step!

# JavaScript Objects - 20 More Practice Exercises

## Exercise 11: Playlist
1. Create an object called `playlist` with properties: name (string), songs (array of strings), and duration (number in minutes).
2. Add a new song to the playlist.
3. Calculate and log the average song duration (assume each song is 3 minutes long).

**Hint:** Use the `length` property of the array to get the number of songs.*/

let playlist = {
    name: "On the Road",
    songs: ["Help", " let it be", " pantera"],
    duration () {
        console.log((this.songs.length) * 3 + "min")
    },
    averageSongDuration() {
        let average = this.songs.length * 3 / (this.songs.length) + "min"
        console.log(average);
        
    }
}
playlist.songs += ", satisfaction"
console.log(playlist);
playlist.duration()



/*## Exercise 12: Bank Account
1. Create an object called `bankAccount` with properties: accountNumber (string), balance (number), and isActive (boolean).
2. Create a method called `deposit` that takes an amount and adds it to the balance.
3. Create another method called `withdraw` that takes an amount and subtracts it from the balance, but only if the balance is sufficient.

**Hint:** Use `this` keyword inside methods to access object properties.

## Exercise 13: Circle
1. Create an object called `circle` with properties: radius (number) and color (string).
2. Add a method called `calculateArea` that returns the area of the circle (π * r^2).
3. Add another method called `calculateCircumference` that returns the circumference of the circle (2 * π * r).

**Hint:** Use `Math.PI` for the value of π.

## Exercise 14: Student Grade Calculator
1. Create an object called `student` with properties: name (string) and grades (array of numbers).
2. Add a method called `calculateAverage` that returns the average of the student's grades.
3. Add another method called `getLetterGrade` that returns 'A' for >=90, 'B' for >=80, 'C' for >=70, 'D' for >=60, and 'F' for <60.

**Hint:** Use array methods like `reduce()` to calculate the average.

## Exercise 15: To-Do List
1. Create an object called `todoList` with properties: tasks (array of strings) and completedTasks (array of strings).
2. Add methods: `addTask(task)`, `completeTask(task)`, and `displayTasks()`.
3. `completeTask(task)` should move a task from tasks to completedTasks.

**Hint:** Use array methods like `push()` and `filter()`.

## Exercise 16: Library Book
1. Create an object called `book` with properties: title (string), author (string), isbn (string), and isAvailable (boolean).
2. Add methods: `checkOut()` and `return()`.
3. These methods should change the `isAvailable` status and log a message.

**Hint:** Use conditional statements in your methods.

## Exercise 17: Color Mixer
1. Create an object called `colorMixer` with properties: color1 (string) and color2 (string).
2. Add a method called `mix()` that returns a new color based on the combination of color1 and color2.
3. Use predefined combinations like "red" + "blue" = "purple", "yellow" + "blue" = "green", etc.

**Hint:** Use a switch statement or object lookup for color combinations.

## Exercise 18: Temperature Converter
1. Create an object called `tempConverter` with properties: celsius (number) and fahrenheit (number).
2. Add methods: `setC(temp)`, `setF(temp)`, `getC()`, and `getF()`.
3. When setting one temperature, automatically calculate and set the other.

**Hint:** Use the formulas: C = (F - 32) * 5/9 and F = C * 9/5 + 32

## Exercise 19: Virtual Pet
1. Create an object called `pet` with properties: name (string), type (string), hunger (number), and happiness (number).
2. Add methods: `feed()`, `play()`, and `getStatus()`.
3. `feed()` should decrease hunger, `play()` should increase happiness, and `getStatus()` should return a string describing the pet's state.

**Hint:** Use template literals for `getStatus()` return value.

## Exercise 20: Quiz
1. Create an object called `quiz` with properties: questions (array of objects) and score (number).
2. Each question object should have: text (string), options (array), and correctAnswer (number - index of correct option).
3. Add methods: `askQuestion(index)` and `checkAnswer(index, answer)`.

**Hint:** Use `console.log()` to display questions and options.

## Exercise 21: Inventory Manager
1. Create an object called `inventory` with properties: items (array of objects) where each item has name (string) and quantity (number).
2. Add methods: `addItem(name, quantity)`, `removeItem(name, quantity)`, and `checkStock(name)`.

**Hint:** Use array `find()` method to locate items.

## Exercise 22: Dice Roller
1. Create an object called `dice` with properties: sides (number) and lastRoll (number).
2. Add a method called `roll()` that generates a random number between 1 and `sides`, sets `lastRoll`, and returns the result.

**Hint:** Use `Math.random()` and `Math.floor()`.

## Exercise 23: Word Counter
1. Create an object called `wordCounter` with a property text (string).
2. Add methods: `countWords()`, `countCharacters(includeSpaces)`, and `getFrequentWords()`.
3. HARD: `getFrequentWords()` should return the most frequent words.

**Hint:** Use string methods like `split()` and object to store word frequencies.

## Exercise 24: Simple Calculator
1. Create an object called `calculator` with properties: result (number).
2. Add methods: `add(n)`, `subtract(n)`, `multiply(n)`, `divide(n)`, and `clear()`.
3. Each method (except `clear()`) should update and return `result`.

**Hint:** Use method chaining to allow operations like `calculator.add(5).multiply(2)`.

## Exercise 25: Rock Paper Scissors Game
1. Create an object called `game` with properties: playerScore (number) and computerScore (number).
2. Add methods: `play(playerChoice)`, `getComputerChoice()`, and `determineWinner(player, computer)`.

**Hint:** Use Math.random() for computer choice and nested if statements for winner logic.

## Exercise 26: BMI Calculator
1. Create an object called `bmiCalculator` with properties: weight (number) and height (number).
2. Add methods: `setMetricUnits(weight, height)`, `setImperialUnits(weight, height)`, and `calculate()`.
3. `calculate()` should return the BMI and a description (e.g., "Normal weight", "Overweight").

**Hint:** BMI = weight(kg) / (height(m))^2 or BMI = 703 * weight(lbs) / (height(inches))^2

## Exercise 27: Time Converter
1. Create an object called `timeConverter` with a property seconds (number).
2. Add methods: `setTime(seconds)`, `getHours()`, `getMinutes()`, and `getSeconds()`.
3. Each getter method should return the appropriate part of the time.

**Hint:** Use division and modulo operators.

## Exercise 28: Shopping Cart
1. Create an object called `shoppingCart` with properties: items (array of objects) and total (number).
2. Each item should have: name (string), price (number), and quantity (number).
3. Add methods: `addItem(name, price, quantity)`, `removeItem(name)`, and `calculateTotal()`.

**Hint:** Use array `reduce()` method to calculate the total.

## Exercise 29: Morse Code Translator
1. Create an object called `morseTranslator` with a property alphabet (object mapping letters to morse code).
2. Add methods: `textToMorse(text)` and `morseToText(morse)`.

**Hint:** Use string `split()` and `join()` methods along with `map()`.

## Exercise 30: Simple Stopwatch
1. Create an object called `stopwatch` with properties: startTime (number), isRunning (boolean), and elapsedTime (number).
2. Add methods: `start()`, `stop()`, `reset()`, and `getElapsedTime()`.

**Hint:** Use `Date.now()` to get the current timestamp.

Remember to test your code frequently and use `console.log()` to debug!*/