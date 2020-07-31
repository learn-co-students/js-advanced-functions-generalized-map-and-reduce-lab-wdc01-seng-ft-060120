const map = (array, callback) => {
    let new_arr = [];
    array.map((element) => {
        new_arr.push(callback(element));
    })
    return new_arr;
}

const reduce = (array, func, initialValue) => {
    let start;
    let answer;

    if(!!initialValue){
        answer = initialValue;
    } else {
        answer = array[0];
    }

    if(!!initialValue){
        start = 0;
    } else {
        start = 1;
    }

    for (;start<array.length;start++) {
        answer = func(array[start], answer)
    }
    return answer;
}
// mdn Array.reduce;