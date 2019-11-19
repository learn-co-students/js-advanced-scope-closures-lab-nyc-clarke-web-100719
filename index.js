// - `produceDrivingRange()` - Calculates whether a
//   given trip is within range.  For example, `produceDrivingRange(10)` returns a
//   function that will take two strings as arguments and returns a message stating
//   whether the trip is in range. If `foo = produceDrivingRange(10)`, then
//   `foo('12th', '15th')` would return `"within range by 7"` and `foo('12th',
//   '30th')` would return `"8 blocks out of range"`. We recommend referencing the
//   `test/indexTest.js` for more details.

const produceDrivingRange = function(num){
    return function(location1, location2){

        let a = parseInt(location1)
        let b = parseInt(location2)
        let distance = Math.abs(a - b) 
        if (distance < num){
            return `within range by ${num-distance}`
        }
        else if (distance > num){
            return `${distance-num} blocks out of range`
        }
        
    }
}


// - `produceTipCalculator()` - Returns a function that then calculates a tip. For
//   example, `produceTipCalculator(.10)` returns a function that calculates ten
//   percent tip on a fare. `produceTipCalculator(.20)` returns a function that
//   calculates twenty percent tip on a fare.

const produceTipCalculator = function(tipValue){
    return function(tip){
        return tip * tipValue;
    }
}

const createDriver = function(){
    let driverId = 0
    return class {
        constructor(name, id){
            this.name = name
            this.id = ++driverId
        }
        
    }
}
