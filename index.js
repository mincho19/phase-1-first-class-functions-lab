// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {return (arr.slice(0,2))}
const returnLastTwoDrivers = (arr) => {return (arr.slice(-2))}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor){
    function multiplier(fare) {
        return factor * fare;
    }
    return multiplier
}

const fareDoubler = (fare) => createFareMultiplier(2);
const fareTripler = (fare) => createFareMultiplier(3);


// selectDifferentDrivers()

function selectDifferentDrivers(drivers, func1){
    if(func1 === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else return returnLastTwoDrivers(drivers);
}