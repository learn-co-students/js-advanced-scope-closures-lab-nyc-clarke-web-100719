function produceDrivingRange(num){

    return (function(str1, str2){
        let int1 = parseInt(str1);
        let int2 = parseInt(str2);

        let diff = Math.abs(int1-int2);
        
        if (diff > num){
            return ((abs(diff,num))+" blocks out of range");
        }
        else{
            return `within range by ${abs(diff,num)}`;
        }
    });

}


function produceTipCalculator(percent){
    return (function(fare){
        return fare*percent;
    });
}

function createDriver(){

    let driverID = 0;

    return class Driver{
        constructor(name){
            this.name = name;
            this.id = ++driverID;
        }
    }


}

function abs(num1,num2){
    return Math.abs(num1-num2);
}

