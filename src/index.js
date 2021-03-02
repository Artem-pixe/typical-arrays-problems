
exports.min = function min (array = []) {
    const min = Math.min.apply(null, array);
    if (min === false || min === null || min === "" || min === NaN || min === 0 || min === undefined || min === Infinity || min === -Infinity)
        return 0;
    else
        return min;
}

exports.max = function max (array = []) {
    const max = Math.max.apply(null, array);
    if (!max || max === Infinity || max === -Infinity)
        return 0;
    else
        return max;
}

exports.avg = function avg (array = []) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if (sum === 0)
        return 0;
    else    
        return sum / array.length;
}
