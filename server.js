const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql");
const PORT = 3000 || process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    startProgram()
  });

function startProgram() {
    console.log(
        "here we go..."
    )
}
function addDepartment() {};
function addRoles() {};
function addEmployees() {};

function viewDepartments() {};
function viewRoles() {};
function viewEmployees() {};

function updateRoles() {};

function endProgram() {};

app.listen(PORT, function() {
    console.log("We're listening to an employee tracker on PORT", PORT)
})