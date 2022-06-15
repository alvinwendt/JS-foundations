

Conditionals
/*
  💡 CodeSandbox Tips 💡

  ‣ The First Step:
    Read through the instructions (right panel) before you begin the exercises.

  ‣ The Left Panel:
    Click the cube icon (top left) to hide/show the left panel.

  ‣ The Console:
    You'll see the output (result) of your code in the console (bottom right)

  ‣ The Errors:
    If your code produces an error, a red error message will show up in the console.
    --- NOTE: Ignore any errors produced while you are still typing.
*/

/*
 ***** WARMING UP *****
 */
//console.log("Hello, everyone! 👋");

// 1. Instantiate (create) and assign your name to a variable called "name", then console.log() it!

//let name = "Alvin"
//console.log(name)

// 2. Instantiate and assign your age to a variable called "age", then console.log() it!

//const age = 35
//console.log(age)
// 3. Instantiate and assign whether or not you like dogs to a variable called "likesDogs" (true/ false), then console.log() it!
//const likesDogs = true
//console.log(likesDogs)
/*
  ***** THE CONDITIONALS: *****
  You start with a variable that contains a boolean value (true or false).
  In modern JavaScript, you can use one of two keywords: `let` or `const`

  `let` is used for defining a variable whose value can change
  `const` is used for defining a variable whose value cannot change
*/
let pastaIsMyFavoriteFood = true;

/*
  Write an `if` condition that checks to see if the
  value of `pastaIsMyFavoriteFood` is true or false.
  If the condition evaluates to true, then use the
  `console.log()` function to display the message:
  "I will have the lasagna, please"
  If the condition evaluates to false, use the
  `console.log()` function to display the message:
  "I will have the daily special"

  Example: console.log("I will have the lasagna, please");
*/
/*
if (pastaIsMyFavoriteFood === true) {
  console.log("I will have the lasagna, please")
}
else {
  console.log("I will have the daily special")
}
*/


/*
    ***** PART 2: *****
      - Define a new variable using const called "favoriteAnimal"
      - Store your favorite animal as a string in the "favoriteAnimal" variable
*/
// Define a const variable here 👇
const favoriteAnimal = "penguin"

if (favoriteAnimal === "Penguin") {
  console.log("Waddle Waddle!")
} else {
  console.log("My favorite animal is NOT the penguin!")
}
  
  


/*
  - Write an `if` condition that checks to see if the value of "favoriteAnimal" is a string of "penguin". If it is a penguin, then use the `console.log()` function to display the message: "Waddle, waddle!"

  - If the "favoriteAnimal" variable is NOT "penguin", then use the `console.log()` function to display the message: "My favorite animal is NOT the penguin!"

  - Change the value of "favoriteAnimal" to see your console log different things! 🕵️‍♀️
*/



Iteration

/*
  Use a `for` loop to iterate this array and display each value in the console below with `console.log()`.
  Remember to to start a counter variable at 0 and write a condition that makes your logic return
  just the right number of times.
*/
const words = ["Iguana", "Raven", "Ostrich", "Chicken", "Kite"];

for (let i = 0; i < words.length; i++) {
  console.log(words[i])
}

// Once you have this working, you may find a special message to yourself  :)

/*
 ***** PART 2 *****
 */
// 1. movieArray is an array that should hold a list of your favorite movies!
const movieArray = ["Dumb and Dumber", "Aliens","Jaws", "Batman"];

// 2. Add the movie "The Bee Movie" into the array. (HINT: .push() it into the array!)

movieArray.push("The Bee Movie");
// 3. Log the newly added movie to the console. At which index is the new movie? (HINT: You'll need these 👉 [])
console.log(movieArray[4])
console.log(movieArray[movieArray.length-1])//Better because always at end
// 5. Write a `for loop` to loop over the movieArray and console.log each movie!
for (let i = 0; i < movieArray.length; i++) {
  console.log(movieArray[i])
}

/*
  ***** CHALLENGE *****
  Inside of the `for loop` for the movieArray, write a conditional that checks to see:
      - IF the movie is "The Bee Movie", log to the console: "According to all known laws of aviation, there is no way a bee should be able to fly."
      - ELSE, then log the movie to the console.
*/
for (let i = 0; i < movieArray.length; i++) {
  if (movieArray[i] === "The Bee Movie")
    console.log("According to all known laws of aviation, there is no way a bee should be able to fly.")  
  else  
  console.log(movieArray[i])
}



Objects


/*
      Create your student object here.
      Start with the curly braces and add the properties.
  */
      const student = {
        name: "student1",
        location: "Nashville",
        gender: "Male",
        age:35
      };
      
      /*
       ***** PART 2 *****
        1. Now create a new variable using your first name (EX: const madi = {})
        2. That variable should hold an object with the same properties as the one above. But the values will be about you instead!
        3. Once you're done, console.log() the variable!
       */
      let alvin = {
        name: "Alvin",
        location: "Nashville",
        gender: "Male",
        age: 35
      }
      
      console.log(alvin)
      /*
        ***** CHALLENGE *****
        1. Using something called DOT NOTATION, log your name that you stored in the "name" property of your object to the console.
        EX: madi.name
       */
      console.log(alvin.name)
      console.log(alvin["name"])
      
      // 2. Using DOT NOTATION, create a NEW property on your object called favoriteColor and assign it to your favorite color.
      alvin.favoriteColor = "Purple"
      // 3. Log your object to the console and see the new property!
      console.log(alvin)
      // 4. Use DOT NOTATION to log the new favoriteColor property to the console.
      console.log(alvin.favoriteColor)
      
      /*
        ***** ⚡ EXTRA CHALLENGE ⚡ ******
        Use an if statement to check if the value of favoriteColor is "goldenrod"
          - IF the value of favoriteColor is "goldenrod", log to the console: "Hey that's Steve's favorite color!"
          - ELSE, log the favoriteColor to the console.
      */
      if (alvin.favoriteColor === "goldenrod")
        console.log("Hey that's Steve's favorite color!")
      else
        console.log(alvin.favoriteColor)
      /*
       ***** 🦸‍♀️ SUPER EXTRA CHALLENGE 🦸‍♂️ *****
        1. Using DOT NOTATION, create a NEW property on your object called `hobbies`
        2. The value of `hobbies` should be an array of some of your hobbies that you like to do!
      */
      alvin.hobbies = ["BJJ", "Weight Training", "Data"]
      console.log(alvin)
      // 3. TIME TO GET WILD 😱: Use a `for loop` to loop though the array of hobbies and print each one to the console using console.log()
      for (let i = 0; i < alvin.hobbies.length; i++) {
        console.log(alvin.hobbies[i])
        
      }



Functions



/*
 ***** PART 1: Filling the Tank (in browser portion of codesandbox) *****
 */
//const fillGasTank = (gallons) => {
//  console.log(`I filled the tank with ${gallons} of gas`);
//};

// Call (or invoke) the function:
//fillGasTank(55)

//const fillGasTank = (gallons, taco) => {
//  console.log(`I filled the tank with ${taco} ${gallons} of gas`);
//};

// Call (or invoke) the function:
//fillGasTank("lizards",55)
/*
 ***** PART 2: *****
 */
// 1. Declare/create a function called "add" that console.logs the result of 47 + 89
const add = (num1, num2) => {
    return num1 + num2
  }
  // 1a. Call the "add" function ( HINT: You'll need these! -> () )
  // add(47,89)
  // 2. Declare/create a function called "subtract" that console.logs the result of 23 - 134
  const subtract = (num1, num2) => {
    console.log(num1 - num2)
  }
  // 2a. Call the "subtract" function ( HINT: () )
  // subtract(23,134)
  // 3. Declare/create a function called "addMore" that takes two arguments: "num1" and "num2"
  // This function should console.log the result of num1 + num2
  
  // 3a. Call the "addMore" function and pass in 2 numbers
  subtract(add(20,5),23)
  /*
    ***** CHALLENGE *****
      - Declare/create a function called "helloWorld" that returns the string "hello world"
      - console.log the result of helloWorld()
  */
  const helloWorld = () => {
    return "Hello World"
  }
  
  const hello = helloWorld()
  
  console.log(hello)
  
  /*
   ***** SUPER MEGA CHALLENGE *****
      - Declare/create a function that loops over the wordsArray and prints each word to the console.
   */
  var wordsArray = [
    "the",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog"
  ];
  
  const printWords = () => {
    for (let i = 0; i < wordsArray.length; i++) {
      console.log(wordsArray[i]) 
    }
  }
  
  printWords()
