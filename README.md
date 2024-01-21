If you want to run this code in your terminal than just clone this repository.
repository: https://github.com/Drsultanali/typescript_calculator.git
and run command to install dependencies:
npm install
To Create a Calculator:

Install Inquirer and types:
npm install inquirer
npm install -D @types/inquirer

Install Chalk and types:
npm install chalk
npm install -D @types/chalk

Update tsconfig.json:
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    // ... other options
  }
}
Create a TypeScript file and start coding:
import inquirer from "inquirer";
import chalk from "chalk";

// Your calculator code goes here


