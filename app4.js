function convertToRoman(number) {
    let roman = {
      "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90,
      "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 };

    let result = "";
  
    for (let i of Object.keys(roman)) {
      let repeat = Math.floor(number / roman[i]);
      number -= repeat * roman[i];
      result += i.repeat(repeat);
    }
  
    return result;
  }
  
  //Тесты для примера
  console.log(convertToRoman(100));
  console.log(convertToRoman(5789));
  console.log(convertToRoman(952));
  console.log(convertToRoman(3999));