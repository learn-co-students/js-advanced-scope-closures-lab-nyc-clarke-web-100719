function produceDrivingRange(range) {
    return function(str1, str2) {
        let start = parseInt(str1);
        let end = parseInt(str2);
        if (end - start > range) {
            return `${(end - start) - range} blocks out of range`;
        } else {
            return `within range by ${Math.abs(end - start)}`
        }
    }
}

function produceTipCalculator(tip) {
    return function(total) {
        return total * tip
    }
}

function createDriver() {
    let DriverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
    }
}