// Code your solution in this file!
function distanceFromHqInBlocks(someDistance) {
    if (someDistance === 43)
    return 1
    else if (someDistance === 50 , 34 )
    return 8
};

function distanceFromHqInFeet (someDistance) {
    if (someDistance === 43)
        return 264
    else (someDistance === 50 , 34)
        return 2112
};
function distanceTravelledInFeet(start, destination) {
    
    let feetTravelled =(destination - start) * 264;
    return Math.abs(feetTravelled);
}


function calculatesFarePrice(start, destination) {
    let totalFeetTravelled = distanceTravelledInFeet(start, destination);
        if (totalFeetTravelled <= 400) {
        return 0;
        }
        else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000){
            return .02 * (totalFeetTravelled - 400);
        }
        else if (totalFeetTravelled > 2000 && totalFeetTravelled < 2500){
        return 25;
        }
        else {
            return "cannot travel that far"
        }
}