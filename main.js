#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter your sentence to count the words."
});
let words = answer.sentence.trim().split(" ");
console.log(`Your sentence's word count is ${words.length}`);
