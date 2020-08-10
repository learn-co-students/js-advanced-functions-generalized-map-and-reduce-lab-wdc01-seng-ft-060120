// Add your functions here
function map(sourceArray, callback) {
    let arr = [];
    for (let i = 0; i < sourceArray.length; i++) {
     let theElement = sourceArray[i]
     arr.push(callback(theElement))
    }
return arr;
}

function reduce(sourceArray, callback, startingPoint){
    let begin;
    let result;

    if (!!startingPoint) {
        result = startingPoint
    } else {
        result = sourceArray[0];
    }

    if (!!startingPoint) {
        begin = 0;
    } else {
        begin = 1;
    }

    for (; begin < sourceArray.length; begin++) {
      result = callback(sourceArray[begin], result)
    }
    return result
}
