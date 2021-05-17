
  
const {inputForm, inputForm2} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)
        printTable(table)
        // FORM (Ask user input)
        const total = await inputForm(model)
        
        const tippercent=await inputForm2(model)
        
        const updatedModel = update(total['total'],tippercent['tipperc'],model)
        
        
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}












