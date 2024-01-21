If you want to run this code in your terminal than just clone this repository.
repository: https://github.com/Drsultanali/typescript_calculator.git
and run command to install dependencies:
npm install

// To Create a Calculator:

Install Inquirer and types:
//this command will install inquirer from npm website:
npm install inquirer 
// this command will install inquirer dependencies:
npm install -D @types/inquirer
Install Chalk and types:
//this command will install chalk from npm website:
npm install chalk
//this command will install chalk dependencies:
npm install -D @types/chalk
//open typescript configration file and make these changes:
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


