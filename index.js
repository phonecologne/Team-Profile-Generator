const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Enginner = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const { ConnectableObservable } = require('rxjs');

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
                    console.log('Its important to enter the managers email address. If anyone needs to reach out to the manager having the email listed here will prevent roadblocks in communications!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Now lets include the office location and floor number for the managers office or workplace. If the manager is working from home please write REMOTE with the timezone for the manager.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please input your managers location! We want a through description of the team and that includes the location of the manager!')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
        .then(mangerInput => {
            const { name, id, emai, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log(`
//now we add the employees to this list
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please input the employees role",
            choices: ['Enginner', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please input the full name of the employee. Please include the nickname if any for this employee.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name for each employee! We can not skip this step!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee ID. Please include all numbers and letters!",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please include the employee ID! Its very important to include this!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Now please input the employees email address",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please include an email for the employee! Having contanct information for an employee helps the team and stops roadblocks in communcation!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please input the employees GitHub username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's GitHub username. If the employee does not have a GitHub, please enter XXXXX or NONE.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Ok, now we need to input your Intern's college, univeristy or school. Please include graduation year if you have that information.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please dont forget to input the name of the Intern's school, university or college in this field! If you do not have the graduation year that is OK.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add more team members to this group?",
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineet (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./direct/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Whoo! We have finished creating your teams set up page! Please check out the INDEX HTML file!")
        }
    })
};

