
const average = (array, number) => {
    const diffsToBeAveraged = array.slice(0,number)
    const sum = diffsToBeAveraged.reduce((a,b) => a + b)
    const average = sum/number
    return average
}

export { average }