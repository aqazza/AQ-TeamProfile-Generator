const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];
//TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs

function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Position",
        message: "What position is this employee",
        choices: ["Manager", "Intern", "Engineer"],
      },
      {
        type: "input",
        name: "email",
        message: "What email is this employee using?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employees id?",
      },
    ])
    .then(({ postition, email, id, name }) => {
      switch (postition) {
        case "Manager":
          inquirer
            .prompt([
              {
                type: "input",
                name: "officeNumber",
                message: "What is the office number?",
              },
            ])
            .then(({ officeNumber }) => {
              employees.push(new Manager(name, id, email, officeNumber));
            });
          break;
        //ask about office number
        case "Intern":
        //ask about school
        case "Engineer":
          // ask about github
          break;
        default:
        // Oh no
      }

      
    });
}
function another() {inquirer.prompt([
    {
        type: 'confirm',
        name: 'more',
        message: 'Create another?'
    }
  ]).then(({ more }) => {
    if (more) newEmployee()
    else console.log(employees)
  })}
  
newEmployee()
