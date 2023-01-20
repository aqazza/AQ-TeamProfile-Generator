const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");

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
  // rendering the HTML file
  fs.writeFileSync(
    "./index.html",
    /*html*/
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <title>Team Profile Generator</title>
      </head>
      <body>
        <div
          class="jumbotron"
          style="
            text-align: center;
            border-bottom: 5px solid black;
            background: rgb(185, 235, 255);
            color: rgba(168, 41, 41, 0.699);
            text-align: center;
          "
          id="jumbotron"
        >
          <h1 class="display-6" style="font-weight: bolder">Meet The Team!</h1>
          <h1><i class="fas fa-video-camera" style="font-size: 75px"></i></h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4"></div>
          </div>
        </div>
    
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
`
  );
}
// end of rendering HTML file
// start of rendering cards
newEmployee();
