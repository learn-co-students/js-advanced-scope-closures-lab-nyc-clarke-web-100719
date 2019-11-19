function produceDrivingRange(distance) {
    return function(startBlock, endBlock){
        let start = parseInt(startBlock)
        let end = parseInt(endBlock)
        let range = (distance - (end - start))
            if (range < 0) {
                return `${Math.abs(range)} blocks out of range`
            } else {
                return `within range by ${range}`
            }
    }
}

function produceTipCalculator(tippercent) {
    return function (fare) {
        let tip = (tippercent * fare)
        return tip
    }
}

function createDriver() {
    let driverID = 0
    return class {
        constructor(name) {
            this.name = name
            this.id = ++driverID
        }
    }

}