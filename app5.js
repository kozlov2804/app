/*
function fibonaci (num){
    return num <= 2 ? 1 : fibonaci(num-1) + fibonaci(num-2);
}
console.log(fibonaci(3));
*/

function fibonaci(num) {
    let numbers = [1, 1];
    for (let i = 2; i < num; i++)
        numbers[i] = numbers[i - 1] + numbers[i - 2];
    return numbers.pop();
}


console.log(fibonaci(8));

// 1 1 2 3 5 8 13 21 34 55 Числа Фибоначчи
// 1 2 3 4 5 6  7  8  9 10