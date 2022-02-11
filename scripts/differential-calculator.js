import { oneDecimalPlace } from "./oneDecimalPlace.js"

const handicapCalculator = document.forms['handicap-calculator']

handicapCalculator.addEventListener('submit', (e) => {
    e.preventDefault()
    const test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const differentials = []

    test.forEach(a => {

        const values = []
        const round = document.getElementsByName(`round${a}[]`)
       
        round.forEach(round => {
            values.push(round.value)
        })

        if(values[0]) {
            const index = (113/values[2])*(values[0]-values[3]-values[4])
            differentials.push(oneDecimalPlace(index))
        } else if (values[1]) {
            const index = (113/values[2])*(values[1]-values[3]-values[4])
            differentials.push(oneDecimalPlace(index)) 
        }
        console.log(differentials)
        
    })  
})