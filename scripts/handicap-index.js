import { eighteenHoleDiffs } from "./differential-calculator.js";
import { combinedDiffs } from "./9-hole-combination.js";

const handicapCalculator = document.forms['handicap-calculator']




handicapCalculator.addEventListener('submit', (e) => {
    e.preventDefault()

    const finalDifferentials = eighteenHoleDiffs.concat(combinedDiffs)
    console.log(finalDifferentials)



    // const finalIndex = document.getElementById('final-index')
    // finalIndex.innerText = 'Your Handicap Index is:'

})