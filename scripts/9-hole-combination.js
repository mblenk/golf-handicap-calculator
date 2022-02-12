import { nineHoleDiffs } from "./differential-calculator.js";
import { oneDecimalPlace } from "./oneDecimalPlace.js"

const handicapCalculator = document.forms['handicap-calculator']
const combinedDiffs = []

handicapCalculator.addEventListener('submit', (e) => {
    e.preventDefault()
    const length = nineHoleDiffs.length

    // Remove any single 9 hole score that won't be combined
    if(length % 2 !== 0) {
        nineHoleDiffs.pop()
    }

    //Combine two 9-hole scores and round to one decimal place to make an 18 hole differential
    const test = []
    for(let i = 0; i < length - 1; i += 2) {
        const combined = (nineHoleDiffs[i] + nineHoleDiffs[i+1])
        const rounded = oneDecimalPlace(combined)
        combinedDiffs.push(Number(rounded))
    }
    console.log(combinedDiffs)
    return combinedDiffs
    
})

export { combinedDiffs }

