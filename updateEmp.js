const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const questions = [
    {
        type: 'input',
        message:'What is the id of the employee you wish to update?',
        name:'emp_id'
    },
    {
        type: 'input',
        message:"Enter the id number of the chosen employee's new role",
        name:'role_id'
    }]

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'root',
        database:'employee_db'
    })

function updateEmp(){
    inquirer
    .prompt(questions)
    .then(response=>{
        db.query(`UPDATE employee SET role_id = ${response.role_id} WHERE id = ${response.emp_id}`, (err, result)=>{
            if (err) {
                console.log(err);
            }
            else{
                db.query('SELECT * FROM employee', (err, result)=>{
                    if (err) {
                        console.log(err);
                    }
                    console.table(result);
                })
            }
        })
    })
}

module.exports = updateEmp