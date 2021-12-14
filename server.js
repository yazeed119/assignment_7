require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const express = require("express");
var MssqlExport = require('mssql')
const fs = require('fs');
const mysql = require('mysql2/promise')
const upload = require('express-fileupload');
const app = express();
const all =  require("./controllers/userController.js");
// Middleware

app.use(express.json()); // parse json bodies in the request object


// Redirect requests to endpoint starting with /posts to postRoutes.js

//app.use(upload)()

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')

})

app.post('/', (req, res) =>{
    if (req.files) {
        console.log(req.files)
        var file = req.files.file
        var file = req.files.file
        var filename = file.name
        console.log(filename)

        file.mv('./Uploads/' + filename, function (err){
            if(err){
                res.send(err)
            } else {
                res.send("File Uploaded")
            }
        })
    }
})











var dbconfig = {
  user: 'username',
  password: 'pass',
  server: 'servername',
  database: 'dbname',
  requestTimeout: 320000,
  pool: {
      max: 20,
      min: 12,
      idleTimeoutMillis: 30000
  }
};
var options = {
  ignoreList: ["sysdiagrams"], // tables to ignore
  tables: [],                  // empty to export all the tables
  outputDirectory: 'somedir',
  log: true,
  header: false                // true to export column names as csv header
};


function MssqlExport(dbconfig, options)
{
//.then(()
  console.log("All done successfully!");
  process.exit(0);
  console.log(err.toString());
  process.exit(-1);
};




 app.get('/', (req, res) => {
   res.status(200).send('Ok');
 }); 

app.use("/user", require("./routes/userRouters"));
 
// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});


app.route('/users').get( (req, res) => {

  res.status(200).send(all.getAllUsers());
  
}); 

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
