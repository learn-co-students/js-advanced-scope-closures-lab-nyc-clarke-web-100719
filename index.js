function produceDrivingRange(blockRange) {
    return function(startBlock, endBlock) {
        const startNum = parseInt(startBlock);
        const endNum = parseInt(endBlock);
        const diff = Math.abs(startNum - endNum);
        if (blockRange >= diff) {
            return `within range by ${blockRange - diff}`;
        } else {
            return `${diff - blockRange} blocks out of range`;
        }
    };
}

function produceTipCalculator(tipPercent) {
    return function(fare) {
        return fare * tipPercent;
    };
}

function createDriver() {
    let driverId = 0;
    return class Driver {
        constructor(name) {
          this.name = name;
          this.id = ++driverId;
        }
    };
    
}