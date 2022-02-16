

// Handicap Index calculator
const modalButton = document.querySelector('.modal-button')
// Course handicap calculator
const courseModal = document.querySelector('.modal-course')

const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')

modalButton.addEventListener('click', (e) => {
    modal.style.display = "block"
})
courseModal.addEventListener('click', (e) => {
    modal.style.display = "block"
})

window.addEventListener('click', (e) => {
    if(e.target == modal) {
        modal.style.display = "none"
    }
})

closeModal.addEventListener('click', (e) => {
    modal.style.display = "none"
})