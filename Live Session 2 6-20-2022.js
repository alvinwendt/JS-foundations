/*
  💡 CodeSandbox Tips HAHAHA 💡

  ‣ The First Step:
    Read through the content displayed in the right panel before you begin the exercises.

  ‣ The Left Panel:
    Click the cube icon (top left) to hide/show the left panel.

  ‣ The Console:
    You'll see the output (result) of your code in the console (bottom right)

  ‣ The Errors:
    If your code produces an error, a red error message will show up in the console.
    --- NOTE: Ignore any errors produced while you are still typing.
*/


/*
  PART 1: Pasta or spaghetti? 🤔
  In the space below this commented section, write an if statement with multiple conditions.

  If pasta IS your favorite food, and the restaurant HAS lasagna
    Use console.log to display the following message:
      "I will have the lasagna"

  If only ONE of those conditions is true,
    Use console.log to display the following statement:
      "I will have the spaghetti"

  If NEITHER condition is true,
    Use console.log to display the following statement:
      "I will have cake"
*/

const pastaIsMyFavorite = false;
const restaurantHasLasagna = false;

if (pastaIsMyFavorite === true && restaurantHasLasagna===true ){
  console.log("I will have the lasagna")
}
else if (pastaIsMyFavorite === true || restaurantHasLasagna=== true) {
  console.log("I will have the spaghetti")
}
else {
  console.log("I will have cake")
}

  /*
  PART 2: Is a hotdog a sandwich? 🤔
  In the space below this commented section, write an if statement with multiple conditions.
  💡 TIP: Comment out your code from part 1 to prevent your console from getting cluttered.

  IF 'isHotdog' is true, AND 'isSandwich' is true,
    Use console.log() to display the following message:
      "A hotdog IS a sandwich!"

  ELSE,
    Use console.log() to display the following message:
      "This is definitely not a sandwich."
*/

const isHotdog = true;
const isSandwich = false;

if (isHotdog === true && isSandwich === true) 
  console.log("A hotdog IS a sandwich")
else 
  console.log("This is definetely not a sandwich")







  let sentence = "";

/*
    1. Add all of the words in this array to the sentence. Use string interpolation or the plus sign.
    Make sure you add a space in between each word.
*/
const loveRelationship = [
  "I",
  "love",
  "sitting",
  "on",
  "the",
  "beach",
  "in",
  "the",
  "summer"
];

/* Write your first for loop here! 😊 */
let Temp1 = ""
for (let i = 0; i < loveRelationship.length; i++) {
  Temp1 = Temp1 + loveRelationship[i] + " "
}

console.log(Temp1)


const family = ["Cathie", "John", "Mark", "Krista"];
let singleFamilyString = "I love my dog";

for (let index = 0; index < family.length; index++) {
  singleFamilyString = `${singleFamilyString} and ${family[index]}`;
}

console.log(singleFamilyString)
/*
    2. Add all of the words in this array to the sentence.
*/
const hateRelationship = [
  "but",
  "I",
  "hate",
  "spending",
  "the",
  "next",
  "two",
  "days",
  "with",
  "sunburn"
];

/* Write your second for loop here! 2️⃣ */
let Temp2 = ""
for (let i = 0; i < hateRelationship.length; i++) {
  Temp2 = Temp2 + hateRelationship[i] + " "
}

console.log(Temp2)

/*
  3. After you sentence is built, display it with `console.log()`
*/
console.log(Temp1 + Temp2)





/* PART 1: Flower Shop (in browser portion of codesandbox) */

const createTulip = () => {
    // Complete your tulip object here.
    const tulip = {
      color: "yellow, pink, blue, or white",
      stemLength: 8,
      growingSeason: "Summer",
      thorny: false
    };
  
    return tulip;
  };
  
  const createRose = () => {
    // Complete your rose object here.
    const rose = {
      color: "pink, red, or white",
      stemLength: 10,
      growingSeason: "Summer",
      thorny: true
    }
  
    return rose;
  };
  
  const newTulip = createTulip();
  console.log(newTulip);
  
  const newRose = createRose();
  console.log(newRose);
  
  /* PART 2: Describe an animal! 🦔 */
  
  /*
    1. Create an object that describes your pet (or your favorite animal) with the following properties:
      - name
      - age
      - breed
    What should the values of those properties be? 🤔
  */
  
  
    const pet = {
      name: "Pogi",
      age: 3,
      breed: "Pug"
    }
  
  // 2. Log to the console your pets'/animals' name
  console.log(pet.name)
  
  // 3. Log to the console your pets'/animals' age
  console.log(pet.age)
  // 4. Log to the console your pets'/animals' breed
  console.log(pet.breed)
  /* CHALLENGE: Using dot notation! */
  // 5. Add a property (key-value-pair) called 'isFluffy' and assign its value to a boolean
  pet.isFluffy = false
  // 6. Add a property (key-value-pair) called 'likesOtherAnimals' and assign its value to a boolean
  pet.likesOtherAnimals = true
  // 7. Add a property (key-value-pair) called 'favoriteFoods' and assign its value to an array of favorite foods
  pet.favoriteFoods = ["Steak", "beef", "filet mignon"]
  
  console.log(pet)
  // SUPER CHALLENGE //
  // 8. Write a for loop to loop over the 'favoriteFoods' array inside of your object and print each one to the console using console.log
  for (let i = 0; i < pet.favoriteFoods.length; i++) {
    console.log(pet.favoriteFoods[i])
  }



/* PART 1: Paint The House (in browser portion of codesandbox) */

// Here's where the function is defined
const paintTheHouse = (color) => {
    return `I painted the house with ${color} paint`;
  };
  
  // Here is where the function is invoked
  const messageFromMinion = paintTheHouse("Orange");
  
  console.log(messageFromMinion);
  
  /*
    PART 2: What's missing?
  
    1. This function should log a nice greeting to anybody! In order for that to happen, we'll need a 'name' parameter. Go ahead and put it in there!
  */
  
  const sayHello = (name) => {
    console.log(`Hello there, ${name}`);
  };
  
  // 2. Pass in a string that has a name in it to make the console say hello! (Do it a few more times with different names!)
  const YourName = "Alvin"
  
  console.log("SAY HELLO:");
  console.log(sayHello(YourName));
  /*
    PART 3: Making Ramen Orders 🍜
  
    Define a function called orderRamen.
  
    orderRamen should take in 3 parameters:
    - protein
    - vegetable
    - broth
  
    orderRamen should RETURN the final ramen order!
    EX: "I would like my ramen with tofu, green onions, and in chicken broth 😋"
  */
  const orderRamen = (protein,vegetable,broth) => {
    console.log(`I would like my ramen with ${protein}, ${vegetable}, and in ${broth} 😋`)
  }
  // Now call (or invoke) orderRamen a few times with different arguments and print each order to the console!
  console.log(orderRamen("Beef","Rice Noodels","Beef Broth"));