import inquirer from "inquirer";
import chalk from "chalk";
console.log("Hello! I am Ekrash Calculator");
const MainMenu = await inquirer.prompt([
    {
        type: "list",
        name: "mainMenuChoices",
        message: chalk.bgMagenta.blue("Please Choose Category"),
        choices: [
            chalk.bold.green("Arithmetic Operation"),
            chalk.bold.blue("Scientific"),
            chalk.bold.red("Exit The Calculator"),
        ],
    },
]);
const Arithmeticmenu = await inquirer.prompt([
    {
        type: "list",
        name: "arthmeticop",
        message: chalk.bgMagenta.blue("Please Choose the Arithmetic Operator"),
        choices: [
            chalk.bold.green("Subtraction -"),
            chalk.bold.blue("Addition +"),
            chalk.bold.gray("Multiplication *"),
            chalk.bold.white("Division /"),
            chalk.bold.red("Back to Menu"),
        ],
    },
]);
//console.log(MainMenu);
//console.log(Arithmeticmenu);
if (Arithmeticmenu.arthmeticop != chalk.bold.red("Back to  Menu")) {
    const number = await inquirer.prompt([
        {
            type: "input",
            name: "Number1",
            Message: chalk.blueBright("Enter the Number 1"),
        },
        {
            type: "input",
            name: "Number2",
            Message: chalk.blueBright("Enter the Number 2"),
        },
    ]);
    let result;
    if (Arithmeticmenu.arthmeticop == chalk.bold.green("Subtraction -")) {
        result = number.Number1 - number.Number2;
        console.log(chalk.greenBright(`The Answer For your Required Operation is as ${result}`));
    }
    else if (Arithmeticmenu.arthmeticop == chalk.bold.blue("Addition +")) {
        result = number.Number1 + number.Number2;
        console.log(chalk.greenBright(`The Answer For your Required Operation is as ${result}`));
    }
    else if (Arithmeticmenu.arthmeticop == chalk.bold.gray("Multiplication *")) {
        result = number.Number1 * number.Number2;
        console.log(chalk.greenBright(`The Answer For your Required Operation is as ${result}`));
    }
    else if (Arithmeticmenu.arthmetiop == chalk.bold.white("Division /")) {
        if (number.numer1 == 0) {
            console.log(chalk.bgRedBright('NO POSSIBLE'));
        }
        result = number.Number1 / number.Number2;
        console.log(chalk.greenBright(`The Answer For your Required Operation is as ${result}`));
    }
    else {
        console.log("Invalid Input");
    }
}
