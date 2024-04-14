#! /usr/bin/env node
import inquirer from "inquirer";
// creating user balnace and pin code
let accountBalnace = 10000;
let accountPin = 98765;
// print a welcome message
console.log("Welcome to adan's atm machine");
let pincode = await inquirer.prompt([
    { name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pincode.pin === accountPin) {
    console.log("pin is correct,login successfull!");
    let operationsName = await inquirer.prompt([
        {
            name: "operations",
            type: "list",
            message: "select an opeations",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationsName.operations === "withdraw amount") {
        let totalamount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (totalamount.amount > accountBalnace) {
            console.log("Insufficient account balance.");
        }
        else {
            accountBalnace -= totalamount.amount;
            console.log(`${totalamount.amount}  withdraw successfully! `);
            console.log("your remianing balance is :" + accountBalnace);
        }
    }
    else if (operationsName.operations === "check balance") {
        console.log(`Your current account balance is ${accountBalnace}`);
    }
    ;
}
else {
    console.log("incorrect pin ,please try again!");
}
