const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Enginner = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Lets add the managers name. Please include a nickname like John BusyBee Doe.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Do not forget the manager is needed for any project. Please include a manager!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please input the managers ID. Please double check your input and remember to include all numbers and letters!",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Dont forget to include your managers ID! This step will avoid confusion with another person with a similar name")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Now please enter the email address for the manager on this project.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Its important to enter the managers email address. If anyone needs to reach out to the manager having the email listed here will prevent roadblocks in communications!')
                    return false;
                }
            }
        },
        {
            
        }
    ])
}