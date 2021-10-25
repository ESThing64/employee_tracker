const inquirer = require('inquirer');
const { initial } = require('lodash');
const server = require("./server");
let answer;




const questions = [

    {
        type: 'list',
        message: "What would you like do with your employee database?",
        name: "menu",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role"
        ]
    }
];

function init() {



    inquirer
        .prompt(questions)


        .then((answers) => {

            switch (answers.menu) {

                case "View all departments":
                    server.viewDep()
                    answer = "department"
                    console.log(answer)
                    init();

                    break;

                case "View all roles":
                    answer = "role_name"
                    console.log(answer)
                    server.viewRoles();
                    init();

                    break;



                case "View all employees":
                    answer = "employee"
                    console.log(answer)
                    server.viewEmp() 
                        init();
                    
                    break;



            };







        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
};

init()