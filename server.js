
// Import and require mysql2
const mysql = require('mysql2');




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
      db.query('SELECT * FROM department', function (err, results){
          if (err){
              console.error(err)
            } else {  
              console.log(results);
              return;
            }
          
      });
      
  };

  exports.viewEmp = () => {
      db.query('SELECT * FROM employee', function (err, results){
          if (err){
              console.error(err)
            } else {  
              console.log(results);
              return;
            }
          
      });
      
  };

  exports.viewRoles = () => {
      db.query('SELECT * FROM role_name', function (err, results){
          if (err){
              console.error(err)
            } else {  
              console.log(results);
              return
            }
          
      });

      
      
      

      

      


      
  };

  



  


