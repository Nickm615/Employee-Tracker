const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'root',
        database:'employee_db'
    },
    console.log('Connected to the employee_db databse')
);
// db.query('USE employee.db;');
const question = [
    {
        type: 'list',
        message:'What would you like to do?',
        choices:['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role'],
        name:'choice'
    }
]
function init() {
    inquirer
    .prompt(question)
    .then(response => {
        switch (response.choice) {
            case 'View all departments':
                db.query('SELECT * FROM department;', (err, result)=> {
                    if (err) {
                        console.log(err);
                    }
                    console.table(result)
                });
                break;
            case 'View all roles':
                db.query('SELECT * FROM roles;', (err, result)=> {
                    if (err) {
                        console.log(err);
                    }
                    console.table(result)
                });
                break;
            case 'View all employees':
                db.query('SELECT * FROM employee;', (err, result)=> {
                    if (err) {
                        console.log(err);
                    }
                    console.table(result)
                });
                break;
            case 'Add a department':
                
                break;
            case 'Add an employee':
                
                break;
            case 'Update an employee role':
                
                break;
            case 'Add a role':
                
                break;
        }
    })
}

module.exports = init