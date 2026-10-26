/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));


// PART 2 — DATA TYPES
// TODO: Log typeof for a string, a number
// Hint: console.log("Animal type:", typeof animal);


// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).+
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;


// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.


// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;


// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.


// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.




// PART 1 — INPUTS AND VARIABLES
let person1 = prompt("Please enter a person's name:");
let age = Number(prompt("Please enter your age"));
const dogage = age / 4;
let adjective1 = prompt("Please enter a adjective:");
let age = Number(prompt("Please enter your age:"));
let dogage = age / 4;
let adjective1 = prompt("Please enter an adjective:");
let place1 = prompt("Please enter a place:");
let time1 = prompt("Please enter a time of day:");
let pastverb1 = prompt("Please enter aa past tense verb:");
let pastverb1 = prompt("Please enter a past tense verb:");
let pastverb2 = prompt("Please enter a past tense verb:");
let job1 = prompt("Please enter your a job");
let ingverb = prompt("Please enter an -ing verb");
let whathappened = dogage * 9;
let noun1 = prompt("Please enter a noun");
let bumber = Number(prompt("Please enter a number"));
let increasedage = dogage + bumber;
let decreasedage = increased age % 10;

let story = `Last Sundaterday, ${person1} woke up at ${time1} and they were feeling ${adjective1}. They ${pastverb1} out of bed and ${pastverb2} to the ${place1}. On the way there, they ran into a ${job1} who saw them of ${ingverb} their dog who was ${dogage} years old, but after that happened, it is now ${whathappened} years old. To save the dog. ${person1} and the ${job1} used an experimental ${noun1}. the ${noun1} took ${bumber} years to work, so the dog is now ${increasedage} years old. After extensive physical therapy, the dog's age went from ${increasedage} to ${decreasedage}`
document.getElementById("madlib-output").innerHTML = story;
let job1 = prompt("Please enter a job:");
let ingverb = prompt("Please enter an -ing verb:");
let noun1 = prompt("Please enter a noun:");
let bumber = Number(prompt("Please enter a number:"));


// PART 2 — DATA TYPES
console.log("Person1 type:", typeof person1);
console.log("Age type:", typeof age);


// PART 3 — VARIABLE CHANGES AND CONCATENATION
person1 = "Mr." + person1; // Changing let variable
let introMessage = "Welcome back, " + person1 + "!";
console.log(introMessage);


// PART 4 — MATH OPERATORS (Using all 6: + - * / % **)
let mathAdd = dogage + bumber;
let mathSub = bumber - 1;         // Minus (-)
let mathMult = dogage * 9;
let mathDiv = age / 2;
let mathMod = mathAdd % 10;       // Modulus (%)
let mathExp = bumber ** 2;        // Exponentiation (**)


let increasedAge = mathAdd;
let decreasedAge = mathMod;
let specialNumber = mathExp;


// PART 5 — STORY (TEMPLATE LITERAL)
let story = `Last Saturday, ${person1} woke up at ${time1} and they were feeling ${adjective1}. They ${pastverb1} out of bed and ${pastverb2} to the ${place1}. On the way there, they ran into a ${job1} who saw them ${ingverb} their dog. The dog was ${dogage} years old, but after the experiment, it is now ${mathMult} years old! To save the dog, ${person1} and the ${job1} used an experimental ${noun1}. The ${noun1} took ${bumber} years to work, so the dog is now ${increasedAge} years old (with a body strength of ${specialNumber}). After physical therapy, the final adjusted age went to ${decreasedAge}.`;


// PART 6 — DISPLAY ON THE WEBPAGE
document.getElementById("madlib-output").innerHTML = story;