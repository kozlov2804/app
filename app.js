let arr = [66, 23, 25, 1, 39, 65];

function median (array) {
    array.sort();
    let length = array.length;
    let index = Math.floor(length / 2);
    if (length % 2 === 0)
        return (array[index] + array[index - 1]) / 2;
    return array[index];
}

console.log(median(arr));