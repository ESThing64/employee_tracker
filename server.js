
// Import and require mysql2
const mysql = require('mysql2');
const index = require("./index")

let add;




// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: 'rootroot',
    database: 'workplace_db'
  },
  console.log(`Connected to the workplace_db database.`)
);


exports.viewDep = () => {
  db.query('SELECT * FROM department', function (err, results) {
    if (err) {
      console.error(err)
    } else {
      console.log('\n \nHere are all the deparments \n \n')
      console.table(results);
      
      return;
    }

  });

};

exports.viewEmp = () => {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) {
      console.error(err)
    } else {
      console.log('\n \nHere are all the employees \n \n')
      console.table(results);
      return;
    }

  });

};

exports.viewRoles = () => {
  db.query('SELECT * FROM role_name', function (err, results) {
    if (err) {
      console.error(err)
    } else {
      console.log("\n \n Here are the all the roles \n \n")
      console.table(results);
      return
    }

  });

};

exports.hAddDep = () => {
  add = index.answer()
  db.query("INSERT INTO department SET ?", {
    dep_name: index.answer()
  }, function (err, results) {

    if (err) {
      console.error(err)
    } else {
      console.log(`\n \n ${add} was added to your list of departments.\n \n`);
      index.exInit()
      
      return;
    }

  });

};

exports.addRole = () => {
  add = index.answer()
  let {role_title, role_salary, role_dep_id } = add
  

  db.query('INSERT INTO role_name SET ?', {
    title: role_title,
    salary: role_salary,
    department_id: role_dep_id

  }, function (err, results) {
    if (err) {
      console.error(err)
    } else {
      console.log(`\n \n The role ${role_title} was added. The salary is ${role_salary} and their department id is ${role_dep_id}\n \n`);
      index.exInit()
      return;
    }

  });

};

exports.addEmp = () => {
  add = index.answer()
  let {emp_fname, emp_lname, emp_role_id} = add
  db.query('INSERT INTO employee SET ?', {
    first_name: emp_fname,
    last_name:  emp_lname,
    role_id:  emp_role_id

  }, function (err, results) {
    if (err) {
      console.error(err)
    } else {
      console.log(`\n \n ${emp_fname} ${emp_lname} was added. Their role id is ${emp_role_id}\n \n`);
      index.exInit()
      return;
    }

  });

};
exports.updateRole = () => {
  add = index.answer()
  console.log(add)
  let {emp_up_id, emp_up_role} = add
  db.query('SELECT * FROM employee; UPDATE employee SET ? WHERE ?', {
    id: emp_up_id,
    role_id:  emp_up_role

  }, function (err, results) {
    if (err) {
      console.error(err)
    } else {
      console.log(`\n \n done\n \n`);


      index.exInit()
      return;
    }

  });

};





// 



















