let arr = [1, 3, 2, 5, 9, 5];

function median (array) {
    array.sort();
    let length = array.length;
    let index = Math.floor(length / 2);
    if (length % 2 === 0)
        return (array[index] + array[index - 1]) / 2;
    return array[index];
}

console.log(median(arr));