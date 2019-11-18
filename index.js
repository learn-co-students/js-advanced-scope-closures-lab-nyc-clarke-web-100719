function produceDrivingRange(int) {
    return function(b1,  b2) {
        num1 = Number(b1.slice(0,2));
        num2 = Number(b2.slice(0,2));
        let range = num2 - num1;
        let diff = Math.abs(range - int);
        if (range >= int) {
            return `${diff} blocks out of range`
        } else {
            return `within range by ${diff}`
        }
    }
}

function produceTipCalculator(dec) {
    return function(total) {
        return total * dec
    }
}

function createDriver(name) {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId
        }
    }
}