import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word: "
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(`your sentence word count is ${words.length}`);
