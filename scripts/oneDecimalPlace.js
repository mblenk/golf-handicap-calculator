// Generic function for rounding numbers to one decimal place

const oneDecimalPlace = (arg) => {
    return (Math.round(arg * 10) / 10).toFixed(1)
}

export { oneDecimalPlace }