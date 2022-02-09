const round1 = [70.3,126,85,0]

const differential = (arr) => {
    return (113/arr[1])*(arr[2]-arr[0]-arr[3])
}

console.log(differential(round1))
