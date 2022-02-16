import { eighteenHoleDiffs, error } from "./differential-calculator.js";
import { combinedDiffs } from "./9-hole-combination.js";
import { average } from "./average-calculator.js";
import { oneDecimalPlace } from "./oneDecimalPlace.js";

const handicapCalculator = document.forms['handicap-calculator']

handicapCalculator.addEventListener('submit', (e) => {
    e.preventDefault()
    const finalDifferentials = eighteenHoleDiffs.concat(combinedDiffs)
    
    finalDifferentials.sort((a,b) => a - b)
    console.log(finalDifferentials)
    
    const diffsCount = finalDifferentials.length
    let handicapIndex = 0

    const finalIndex = document.getElementById('final-index')
    const modalText = document.getElementById('modal-text')
    const modalIndex = document.getElementById('modal-index')
    
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