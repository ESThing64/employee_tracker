
// Import and require mysql2
const mysql = require('mysql2');
const index = require("./index")
const init = require("./index")
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
      console.log(`${add} was added to your list of departments.`);
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
      console.log(results);
      index.exInit()
      return;
    }

  });

};

exports.addEmp = () => {
  console.log("its in the emp function")
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
      console.log(results);
      index.exInit()
      return;
    }

  });

};

// exports.updateRole = () => {
//   db.query('INSERT INTO department SET ?', function (err, results) {
//     if (err) {
//       console.error(err)
//     } else {
//       console.log(results);
//       return;
//     }

//   });

// };


















