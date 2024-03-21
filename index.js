//calculaton of dist,fare 
function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    let distance;//below 42

    if (location < hqLocation) {
        distance = hqLocation - location;
    } else {
        distance = location - hqLocation;
    }

    return distance;
}

function distanceFromHqInFeet(location) {
    const feetPerBlock = 264; // Average
    const hqLocation = 42;
    let distanceInFeet;

    //  below 42
    if (location < hqLocation) {
        distanceInFeet = (hqLocation - location) * feetPerBlock;
    } else {
        distanceInFeet = (location - hqLocation) * feetPerBlock;
    }

    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // Average feet per city block
    let distanceInFeet;

    // Calculation of distance traveled
    if (start < destination) {
        distanceInFeet = (destination - start) * feetPerBlock;
    } else {
        distanceInFeet = (start - destination) * feetPerBlock;
    }

    return distanceInFeet;
}
//calculation of fare price(start,destination)
function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; // Average feet per city block
    const first400FeetFree = 400;
    const minChargeableDistance = 400;
    const maxChargeableDistance = 2000;
    const maxDistance = 2500;

    // Calculate the distance traveled in feet
    let distanceInFeet = distanceTravelledInFeet(start, destination);

    // if the distance exceeds 2500
    if (distanceInFeet > maxDistance) {
        return "cannot travel that far";
    }

    // fare based on distance
    let fare;
    if (distanceInFeet <= first400FeetFree) {
        fare = 0.00; // Free sample 
    } else if (distanceInFeet <= maxChargeableDistance) {
        // fare for distances between 400 and 2000 ft
        fare = (distanceInFeet - first400FeetFree) * 0.02;
    } else {
        // Perm fare for distances over 2000 ft
        fare = 25;
    }

    return parseFloat(fare.toFixed(2)); // Convert the result to a number
}


//to calculate dist in ft
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // Avg feet per city block
    let distanceInFeet;

    // distance traveled
    if (start < destination) {
        distanceInFeet = (destination - start) * feetPerBlock;
    } else {
        distanceInFeet = (start - destination) * feetPerBlock;
    }

    return distanceInFeet;
}