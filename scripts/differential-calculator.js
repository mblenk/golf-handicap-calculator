import { oneDecimalPlace } from "./oneDecimalPlace.js"

const handicapCalculator = document.forms['handicap-calculator']
const eighteenHoleDiffs = []
const nineHoleDiffs = []
let error = ''

handicapCalculator.addEventListener('submit', (e) => {
    e.preventDefault()
    const roundsPlayed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    eighteenHoleDiffs.length = 0 // reset values on each new form submission
    nineHoleDiffs.length = 0
    error = ''
    
    roundsPlayed.forEach(a => {

        const formSubmissionValues = []
        const round = document.getElementsByName(`round${a}[]`)
    
        round.forEach(round => {
            formSubmissionValues.push(round.value)
        })
        
        const scoreEighteen = formSubmissionValues[0]
        const scoreNine = formSubmissionValues[1]
        const slopeRating = formSubmissionValues[2]
        const courseRating = formSubmissionValues[3]
        const playingConditions = formSubmissionValues[4]

        // Catch an error if the datafields are not correctly filled in
        if((scoreEighteen || scoreNine) && (!slopeRating || !courseRating)) {
           error = `The Slope or Course Rating has not been provided for Round ${a}`
        }
        if((slopeRating || courseRating) && (!scoreEighteen && !scoreNine)) {
            error = `No score has been provided for Round ${a}`
        }
        
        if(scoreEighteen || scoreNine === 0) {
            const index = (113 / slopeRating)*(scoreEighteen - courseRating - playingConditions)
            const rounded = oneDecimalPlace(index)  
            eighteenHoleDiffs.push(Number(rounded))
        } else if (scoreNine || scoreEighteen === 0) {
            const index = (113 / slopeRating)*(scoreNine - courseRating - (playingConditions/2))
            nineHoleDiffs.push(Number(index)) //9 hole score not rounded until combined with a second 9 hole score
        }
        return [eighteenHoleDiffs, nineHoleDiffs, error]
    })  
})

export { eighteenHoleDiffs, nineHoleDiffs, error }