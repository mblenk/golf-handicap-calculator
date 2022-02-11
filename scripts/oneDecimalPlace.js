
const oneDecimalPlace = (arg) => {
    return (Math.round(arg * 10) / 10).toFixed(1)
}

export { oneDecimalPlace }