// Code your solution in this file!

const returnFirstTwoDrivers=(driversArray)=>{
        return driversArray.slice(0,2)
    }

const returnLastTwoDrivers=(driversArray)=>{
        return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiply)=> {
    return function(value){
        return multiply*value
    }
} 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
  };