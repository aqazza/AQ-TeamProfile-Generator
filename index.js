const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");
const render = require("./source/template");
const employees = [];
//TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs

function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "What position is this employee",
        choices: ["Manager", "Intern", "Engineer"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
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
    .then(({ position, email, id, name }) => {
      switch (position) {
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
              renderHTMLFile();
              another();
            });
          break;
        //ask about office number
        case "Intern":
          //ask about school
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message: "What school are the interns attending?",
              },
            ])
            .then(({ school }) => {
              employees.push(new Intern(name, id, email, school));
              renderHTMLFile();
              another();
            });
          break;
        case "Engineer":
          // ask about github
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: "What is their github profile?",
              },
            ])
            .then(({ github }) => {
              employees.push(new Engineer(name, id, email, github));
              another();
            });
          break;
        default:
        // Oh no
      }
    });
}
function another() {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "more",
        message: "Create another?",
      },
    ])
    .then(({ more }) => {
      if (more) newEmployee();
      // else renderHTMLFile();
    });
}
// end of questions function
function renderHTMLFile() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(employees), "utf-8");
}
// end of rendering HTML file
// start of rendering cards
newEmployee();
