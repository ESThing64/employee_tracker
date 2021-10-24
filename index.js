const inquirer = require('inquirer');



const questions = [
 
    {
        type: 'list',
        message: "What file format do you want for your readme?",
        name: "fileType",
        choices: [
         "View all departments",
         "View all roles",
         "View all employees",
         "Add a department",
         "Add a role",
         "Add an employee",
         "Update an employee role"
         ]
    },

    {
        type: 'input',
        message: "Whats the title of your project?",
        name: "project"
    },


];


inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });