// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
if (pickUpLocation > 42) {
    return pickUpLocation - 42
}else{
    return 42 - pickUpLocation
}
}

function distanceFromHqInFeet(pickUpLocation){
 let block = distanceFromHqInBlocks(pickUpLocation)
 let feet = block*264
 return feet
}

function distanceTravelledInFeet(start, destination){
if (start > destination){
    return (start - destination) * 264

}else{ 
    return (destination - start) * 264

}
}
function calculatesFarePrice(start, destination){
    if (distanceFromHqInFeet(start, destination) < 400){
        return 0
    }else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return 2.56
    }else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25
}else{
    return "cannot travel that far"
}
}