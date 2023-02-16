const renderHTMLFile = (team) => {
  console.log(team);
  // rendering the HTML file

  const generateManager = (manager) => {
    return `<!DOCTYPE html>
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

          <div class="card" style="width: 18rem">
          <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
            <p class="card-text">${manager.getId()}</p>
            <p class="card-text">${manager.getEmail()}</p>
            <p class="card-text">${manager.getOfficeNumber()}</p>
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
  `;
  };
  const generateEngineer = (engineer) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
            <p class="card-text">${engineer.getId()}</p>
            <p class="card-text">${engineer.getEmail()}</p>
            <p class="card-text">${engineer.getGithub()}</p>
        </div>
        </div>
    `;
  };
  const generateIntern = (intern) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
            <p class="card-text">${intern.getId()}</p>
            <p class="card-text">${intern.getSchool()}</p>
        </div>
        </div>
        `;
  };
  const HTML = [];
  HTML.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  HTML.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  HTML.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return HTML.join("");
};
module.exports = (team) => {
  return `
    <!DOCTYPE html>
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
        ${renderHTMLFile(team)}
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
    
    `;
};
