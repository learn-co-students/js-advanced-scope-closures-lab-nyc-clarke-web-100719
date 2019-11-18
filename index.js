function produceDrivingRange(range){
    return function(start,end){
        let result = parseInt(start.slice(0,2))- parseInt(end.slice(0,2))
        result = Math.abs(result);
        if(result > range)return `${result - range} blocks out of range`;
        else return `within range by ${range - result}`;
    }
}

function produceTipCalculator(percent){
    return function(amount){
        return amount * percent;
    }
}

function createDriver(){
    driverId = 0;
    return class {
        constructor(name){
        this.name = name;
        this.id = ++driverId;
        }
    };
}