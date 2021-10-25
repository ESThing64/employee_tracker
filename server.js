const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');


// const PORT = process.env.PORT || 3001;
// const app = express();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

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

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });



  


