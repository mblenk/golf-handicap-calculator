// import { nineHoleDiffs } from "./differential-calculator.js";
import { oneDecimalPlace } from "./oneDecimalPlace.js"


const nineHoleDifferentialCombination = (array) => {
    const combinedDiffs = []
    const length = array.length

    // Remove any single 9 hole score that won't be combined
    if(length % 2 !== 0) {
        array.pop()
    }

    //Combine two 9-hole scores and round to one decimal place to make an 18 hole differential
    for(let i = 0; i < length - 1; i += 2) {
        const combined = (array[i] + array[i+1])
        const rounded = oneDecimalPlace(combined)
        combinedDiffs.push(Number(rounded))
    }
    return combinedDiffs
}

export { nineHoleDifferentialCombination }





//***PREVI0US CODE ***

// const handicapCalculator = document.forms['handicap-calculator']
// const combinedDiffs = []

// handicapCalculator.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const length = nineHoleDiffs.length

//     // Remove any single 9 hole score that won't be combined
//     if(length % 2 !== 0) {
//         nineHoleDiffs.pop()
//     }

//     //Combine two 9-hole scores and round to one decimal place to make an 18 hole differential
//     for(let i = 0; i < length - 1; i += 2) {
//         const combined = (nineHoleDiffs[i] + nineHoleDiffs[i+1])
//         const rounded = oneDecimalPlace(combined)
//         combinedDiffs.push(Number(rounded))
//     }
//     return combinedDiffs
    
// })

// export { combinedDiffs }

