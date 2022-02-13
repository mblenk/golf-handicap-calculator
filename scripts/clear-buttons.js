// Clear values column

const clearButtons = document.getElementsByClassName('btn btn-danger btn-sm')
const buttonsArray = Array.from(clearButtons)

buttonsArray.forEach(button => {
    button.addEventListener('click', (e) => {
        const id = button.id
        const inputElementValues = document.getElementsByName(`round${id}[]`)
    
        inputElementValues.forEach(node => {
            node.value = ""
        })
    })
})

// Clear table button

const clearTable = document.getElementById('clear-table')

clearTable.addEventListener('click', (e) => {
    const inputFields = document.getElementsByClassName('form-input')
    const inputsArray = Array.from(inputFields)

    inputsArray.forEach(node => {
        node.value = ""
    })
})




