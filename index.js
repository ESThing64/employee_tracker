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

 exports.init = () => {

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


                case "Add a department":
                    addDep();
                    break;



                case "Add a role":
                    console.log('hey')
                    addRole();
                    break;


                case "Add an employee":
                    addEmp();
                    break;


                case "Update an employee role":
                    updateRole();
                    break;


                case "Add a department":
                    addDep();
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
 firstInit = () => {

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


                case "Add a department":
                    addDep();
                    break;



                case "Add a role":
                    console.log('hey')
                    addRole();
                    break;


                case "Add an employee":
                    addEmp();
                    break;


                case "Update an employee role":
                    updateRole();
                    break;


                case "Add a department":
                    addDep();
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




function addDep() {

    inquirer
        .prompt([{
            type: 'input',
            message: "Please input the a department name",
            name: "menu_dep",

        }

        ])
        .then((answers) => {
            exports.answer = () => {
                return answers.menu_dep
            }

            server.hAddDep()
            


        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}

function addRole() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: "What's the title of the new role?",
                name: "role_title",

            },
            {
                type: 'input',
                message: "What's the salary?",
                name: "role_salary",

            },
            {
                type: 'input',
                message: "Please enter the department's id.",
                name: "role_dep_id",

            },
        ])
        .then((answers) => {
             
            exports.answer = () => {
                return answers
            }
            server.addRole()
            

           


        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}

function addEmp() {

    inquirer
        .prompt([
        {
            type: 'input',
            message: "What's the employee's first name?",
            name: "emp_fname",
        },
        
        {
            type: 'input',
            message: "What's the employee's last name?",
            name: "emp_lname",
        },
        {
            type: 'input',
            message: "Which role does this employee have? Please enter their id.",
            name: "emp_role_id",
        }
        

        ])
        .then((answers) => {
            exports.answer = () => {
                return answers
            }

            server.addEmp()


        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}

function updateRole() {

    inquirer
        .prompt([{
            type: 'input',
            message: "Please input the a department name",
            name: "menu_dep",

        }

        ])
        .then((answers) => {
            exports.answer = () => {
                return answers.menu_dep
            }

            server.hAddDep()


        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}




firstInit()

