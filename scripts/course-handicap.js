import { oneDecimalPlace } from "./oneDecimalPlace.js"

const courseHandicap = document.forms['course-handicap']

courseHandicap.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementsByName('holes[]')

    const values = []
    input.forEach(val => {
        values.push(Number(val.value))
    })
    
    let courseIndex = 0

    if(values[0] === 18) {
        const result = values[1]*(values[2]/113)+(values[3]-values[4])
        courseIndex = oneDecimalPlace(result)
    }
    console.log(courseIndex)
    if(values[0] === 9) {
        const result = (values[1]/2)*(values[2]/113)+((values[3]*2)-(values[4]*2))
        courseIndex = oneDecimalPlace(result)
    }
    console.log(courseIndex)

    const modalText = document.getElementById('modal-text')
    const modalIndex = document.getElementById('modal-index')

    modalText.innerText = `Your Course Handicap is:`
    modalIndex.innerText = `${courseIndex}`
})

