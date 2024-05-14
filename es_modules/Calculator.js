import inquirer from "inquirer";
import chalk from "chalk";
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
