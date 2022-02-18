import { oneDecimalPlace } from "./oneDecimalPlace.js"

const courseHandicap = document.forms['course-handicap']

courseHandicap.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementsByName('holes[]')

    const formSubmissionValues = []
    input.forEach(val => {
        formSubmissionValues.push(Number(val.value))
    })

    const modalText = document.getElementById('modal-text')
    const modalIndex = document.getElementById('modal-index')
    const indexResult = document.getElementById('course-handicap-index')
    
    let courseIndex = 0
    const numberOfHoles = formSubmissionValues[0]
    const handicapIndex = formSubmissionValues[1]
    const slopeRating = formSubmissionValues[2]
    const courseRating = formSubmissionValues[3]
    const coursePar = formSubmissionValues[4]
    let error = ''

    // Catch error if fields not filled in correctly
    if(!numberOfHoles || !handicapIndex || !slopeRating || !courseRating || !coursePar) {
        error = 'All fields must be filled in'
        modalText.innerText = `${error}`
        return
    }

    if(numberOfHoles === 18) {
        const result = handicapIndex * (slopeRating / 113) + (courseRating - coursePar)
        courseIndex = oneDecimalPlace(result)
    }
    
    if(numberOfHoles === 9) {
        const result = (handicapIndex / 2)*(slopeRating / 113) + ((courseRating * 2) - (coursePar * 2))
        courseIndex = oneDecimalPlace(result)
    }

    modalText.innerText = `Your Course Handicap is:`
    modalIndex.innerText = `${courseIndex}`
    indexResult.innerText = `Your Course Handicap is ${courseIndex}`
})

