import inquirer from "inquirer";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";
console.log("Hello! I am Ekrash Calculator");



const MainMenu = await inquirer.prompt([
    {
      type: 'list',
      name: "mainMenuChoices",
      message: chalk.bgMagenta.blue("Please Choose Category"), 
      choices: [
        chalk.bold.green("Arithmetic Operation"), 
        chalk.bold.blue("Scientific"),
        chalk.bold.red("Exit The Calculator"), 
      ],
    }
]);



