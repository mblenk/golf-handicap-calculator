import { oneDecimalPlace } from "./oneDecimalPlace.js"



const calculateScoreDifferentials = (array, number) => {
    const [scoreEighteen, scoreNine, slopeRating, courseRating, playingConditions] = array

    if(scoreEighteen || scoreNine === 0) {
        const type = 18
        const index = (113 / slopeRating) * (scoreEighteen - courseRating - playingConditions)
        const rounded = Number(oneDecimalPlace(index))  
        return [rounded, type]
    } else if (scoreNine || scoreEighteen === 0) {
        const type = 9
        const index = (113 / slopeRating) * (scoreNine - courseRating - (playingConditions / 2))
        return [index, type]
    }
    
}

export { calculateScoreDifferentials }





//***PREVIOUS CODE***

// const handicapCalculator = document.forms['handicap-calculator']
// const eighteenHoleDiffs = []
// const nineHoleDiffs = []
// let error = ''

// handicapCalculator.addEventListener('submit', (e) => {
//     e.preventDefault()
//     eighteenHoleDiffs.length = 0 // reset values on each new form submission
//     nineHoleDiffs.length = 0
//     error = ''
    
//     for(let i = 1; i <= 20; i++) {

//         const round = document.getElementsByName(`round${i}`)
        
//         const formSubmissionValues = Array.from(round).map(a => a.value) 
        
//         const [scoreEighteen, scoreNine, slopeRating, courseRating, playingConditions] = formSubmissionValues

//         // Catch an error if the datafields are not correctly filled in
//         if((scoreEighteen || scoreNine) && (!slopeRating || !courseRating)) {
//            error = `The Slope or Course Rating has not been provided for Round ${a}`
//         }
//         if((slopeRating || courseRating) && (!scoreEighteen && !scoreNine)) {
//             error = `No score has been provided for Round ${a}`
//         }
        
//         if(scoreEighteen || scoreNine === 0) {
//             const index = (113 / slopeRating) * (scoreEighteen - courseRating - playingConditions)
//             const rounded = oneDecimalPlace(index)  
//             eighteenHoleDiffs.push(Number(rounded))
//         } else if (scoreNine || scoreEighteen === 0) {
//             const index = (113 / slopeRating) * (scoreNine - courseRating - (playingConditions/2))
//             nineHoleDiffs.push(Number(index)) //9 hole score not rounded until combined with a second 9 hole score
//         }
//     }  
//     return [eighteenHoleDiffs, nineHoleDiffs, error]
// })

// export { eighteenHoleDiffs, nineHoleDiffs, error }
