#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function askQuestions() {
    const answers = await inquirer.prompt([
            {
                type: "list",
                name: "operator",
                message: "Which operation you want to perform?",
                choices: ["Addition", "Subtraction", "Multiplication", "Division"]
            }, {
                type: "number",
                name: "num1",
                message: "Enter number 1"
            }, {
                type: "number",
                name: "num2",
                message: "Enter number 2"
            }

        ])

    if (answers.operator == "Addition") {
        console.log(chalk.red(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    if (answers.operator == "Subtraction") {
        console.log(chalk.yellowBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`))
    }
    if (answers.operator == "Multiplication") {
        console.log(chalk.greenBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`))
    }
    if (answers.operator == "Division") {
        console.log(chalk.blueBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`))
    }

};
async function startAgain() {
    do {
        await askQuestions();
        var again = await inquirer
            .prompt({
                type: "input",
                name: "restart",
                message: "Do you want to continue press y or n:"
            })
    }
    while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "Yes");
}
startAgain();
