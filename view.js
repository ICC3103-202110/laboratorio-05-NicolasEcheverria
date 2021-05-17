const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator',
            {
                horizontalLayout: 'fitted',
                font: 'Nancyj-Improved'
            }
        )
    )
}

function getTable(model){
    const {total} = model
    const{tipperc}=model
    const{tipval}=model
    const{totalbill}=model
    return [
        {"Total": total,'tip%':tipperc,"tip value":tipval,"total bill":totalbill},
    ]
}

function inputForm(model){
    const {total} = model
    const message = 'total'
    return inquirer.prompt([
        {
            name: 'total',
            type: 'input',
            message: message,
            default: total,
            
        }
    ])
}
function inputForm2(model){
    const {tipperc} = model
    const message = 'tip percent%'
    return inquirer.prompt([
        {
            name: 'tipperc',
            type: 'input',
            message: message,
            default: tipperc,
            
        }
    ])
}



// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    inputForm2
    
}



