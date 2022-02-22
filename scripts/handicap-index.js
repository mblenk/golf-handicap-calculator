// import { eighteenHoleDiffs, error } from "./differential-calculator.js";
// import { combinedDiffs } from "./9-hole-combination.js";
import { average } from "./average-calculator.js";
import { oneDecimalPlace } from "./oneDecimalPlace.js";
import { calculateScoreDifferentials } from "./differential-calculator.js";
import { nineHoleDifferentialCombination } from "./9-hole-combination.js";


const handicapCalculator = document.forms['handicap-calculator']

handicapCalculator.addEventListener('submit', (e) => {
    e.preventDefault()
    const eighteenHoleDiffs = []
    const nineHoleDiffs = []
    let error = ''

    for(let i = 1; i <= 20; i++) {

        const round = document.getElementsByName(`round${i}`)
        
        const formSubmissionValues = Array.from(round).map(a => a.value) 
        const [scoreEighteen, scoreNine, slopeRating, courseRating] = formSubmissionValues

        // Catch user errors when filling in the table
        if((scoreEighteen || scoreNine) && (!slopeRating || !courseRating)) {
            error = `The Slope or Course Rating has not been provided for Round ${i}`  
        }
        if((slopeRating || courseRating) && (!scoreEighteen && !scoreNine)) {
            error = `No score has been provided for Round ${i}`
        }

        // Collect values if no errors found
        if(formSubmissionValues[0]) {
            const differential = calculateScoreDifferentials(formSubmissionValues, i)
            if(isNaN(differential[0])) {
                error = differential
            }
            eighteenHoleDiffs.push(differential[0])
        }
        if(formSubmissionValues[1]) {
            const differential = calculateScoreDifferentials(formSubmissionValues, i)
            if(isNaN(differential[0])) {
                error = differential
            }
            nineHoleDiffs.push(differential[0])
        }
    }

    //Combine score differentials to start calculating handicap index
    const combinedNineHoleDiffs = nineHoleDifferentialCombination(nineHoleDiffs)

    const finalDifferentials = eighteenHoleDiffs.concat(combinedNineHoleDiffs)
    console.log(finalDifferentials)

    finalDifferentials.sort((a,b) => a - b)
    
    const diffsCount = finalDifferentials.length
    let handicapIndex = 0

    //Grab modal elements to output results to the user
    const finalIndex = document.getElementById('final-index')
    const modalText = document.getElementById('modal-text')
    const modalIndex = document.getElementById('modal-index')

    // Run the handicap calculation and output results    
    if(diffsCount < 3){
        finalIndex.innerText = '54 holes of scores are required'
        modalText.innerText = '54 holes of scores are required'
        modalIndex.innerText = ''
        return
    }

    if(error) {
        modalText.innerText = `${error}`
        modalIndex.innerText = ''
        finalIndex.innerText = ''
        return
    }

    if(diffsCount === 3){
        handicapIndex = finalDifferentials[0] - 2
    }

    if(diffsCount === 4){
        handicapIndex = finalDifferentials[0] - 1
    }

    if(diffsCount === 5){
        handicapIndex = finalDifferentials[0]
    }

    if(diffsCount === 6){
        handicapIndex = oneDecimalPlace(average(finalDifferentials, 2) - 1)
    }

    if(diffsCount === 7 || diffsCount === 8){
        handicapIndex = oneDecimalPlace(average(finalDifferentials, 2))
    }

    if(diffsCount >= 9 && diffsCount <= 11) {
        handicapIndex = oneDecimalPlace(average(finalDifferentials, 3))
    }

    if(diffsCount >= 12 && diffsCount <= 14) {
        handicapIndex = oneDecimalPlace(average(finalDifferentials, 4))
    }

    if(diffsCount === 15 || diffsCount === 16) {
        handicapIndex = oneDecimalPlace(average(finalDifferentials, 5))
    }

    if(diffsCount === 17 || diffsCount === 18) {
        handicapIndex = oneDecimalPlace(average(finalDifferentials, 6))
    }

    if(diffsCount === 19){
        handicapIndex = oneDecimalPlace(average(finalDifferentials, 7))
    }

    if(diffsCount === 20){
        handicapIndex = oneDecimalPlace(average(finalDifferentials, 8))
    }

    finalIndex.innerText = `Your Handicap Index is: ${handicapIndex}`
    modalText.innerText = `Your Handicap Index is:`
    modalIndex.innerText = `${handicapIndex}`
    
})




//***PREVIOUS CODE***

// const handicapCalculator = document.forms['handicap-calculator']

// handicapCalculator.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const finalDifferentials = eighteenHoleDiffs.concat(combinedDiffs)
    
//     finalDifferentials.sort((a,b) => a - b)
    
    
//     const diffsCount = finalDifferentials.length
//     let handicapIndex = 0

//     const finalIndex = document.getElementById('final-index')
//     const modalText = document.getElementById('modal-text')
//     const modalIndex = document.getElementById('modal-index')
    
//     if(diffsCount < 3){
//         finalIndex.innerText = '54 holes of scores are required'
//         modalText.innerText = '54 holes of scores are required'
//         modalIndex.innerText = ''
//         return
//     }

//     if(error) {
//         modalText.innerText = `${error}`
//         modalIndex.innerText = ''
//         finalIndex.innerText = ''
//         return
//     }

//     if(diffsCount === 3){
//         handicapIndex = finalDifferentials[0] - 2
//     }

//     if(diffsCount === 4){
//         handicapIndex = finalDifferentials[0] - 1
//     }

//     if(diffsCount === 5){
//         handicapIndex = finalDifferentials[0]
//     }

//     if(diffsCount === 6){
//         handicapIndex = oneDecimalPlace(average(finalDifferentials, 2) - 1)
//     }

//     if(diffsCount === 7 || diffsCount === 8){
//         handicapIndex = oneDecimalPlace(average(finalDifferentials, 2))
//     }

//     if(diffsCount >= 9 && diffsCount <= 11) {
//         handicapIndex = oneDecimalPlace(average(finalDifferentials, 3))
//     }

//     if(diffsCount >= 12 && diffsCount <= 14) {
//         handicapIndex = oneDecimalPlace(average(finalDifferentials, 4))
//     }

//     if(diffsCount === 15 || diffsCount === 16) {
//         handicapIndex = oneDecimalPlace(average(finalDifferentials, 5))
//     }

//     if(diffsCount === 17 || diffsCount === 18) {
//         handicapIndex = oneDecimalPlace(average(finalDifferentials, 6))
//     }

//     if(diffsCount === 19){
//         handicapIndex = oneDecimalPlace(average(finalDifferentials, 7))
//     }

//     if(diffsCount === 20){
//         handicapIndex = oneDecimalPlace(average(finalDifferentials, 8))
//     }

//     finalIndex.innerText = `Your Handicap Index is: ${handicapIndex}`
//     modalText.innerText = `Your Handicap Index is:`
//     modalIndex.innerText = `${handicapIndex}`
// })