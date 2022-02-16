import { oneDecimalPlace } from "./oneDecimalPlace.js"

const handicapCalculator = document.forms['handicap-calculator']
const eighteenHoleDiffs = []
const nineHoleDiffs = []
let error = ''

handicapCalculator.addEventListener('submit', (e) => {
    e.preventDefault()
    const roundsPlayed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    eighteenHoleDiffs.length = 0
    nineHoleDiffs.length = 0
    error = ''
    
    roundsPlayed.forEach(a => {

        const values = []
        const round = document.getElementsByName(`round${a}[]`)
    
        round.forEach(round => {
            values.push(round.value)
        })
        
        // Catch an error if the datafields are not correctly filled in
        if((values[0] || values[1]) && (!values[2] || !values[3])) {
           error = `The Slope or Course Rating has not been provided for Round ${a}`
        }
        if((values[2] || values[3]) && (!values[0] && !values[1])) {
            error = `No score has been provided for Round ${a}`
        }
        
        if(values[0] || values[1] === 0) {
            const index = (113/values[2])*(values[0]-values[3]-values[4])
            const rounded = oneDecimalPlace(index)  
            eighteenHoleDiffs.push(Number(rounded))
        } else if (values[1] || values [0] === 0) {
            const index = (113/values[2])*(values[1]-values[3]-(values[4]/2))
            nineHoleDiffs.push(Number(index)) //9 hole score not rounded until combined with a second 9 hole score
        }
        return [eighteenHoleDiffs, nineHoleDiffs, error]
    })  
})

export { eighteenHoleDiffs, nineHoleDiffs, error }