const express = require("express");
const inquirer = require("inquirer");
const PORT = 3000 || process.env.PORT;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function startProgram() {
    console.log("Here we start...")
}
function addDepartment() {};
function addRoles() {};
function addEmployees() {};

function viewDepartments() {};
function viewRoles() {};
function viewEmployees() {};

function updateRoles() {};

function endProgram() {};

startProgram();
app.listen(PORT, function() {
    console.log("We're listening to an employee tracker on PORT", PORT)
})