const prompt = require("prompt-sync")();

let birthYear = Number(prompt("Enter your birth year: "));

let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Your age is: " + age);