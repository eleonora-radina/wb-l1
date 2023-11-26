/*Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом.
Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).*/

let palindrome = "А роза упала на лапу Азора";
let notPalindrome = "Я совсем не палиндром";

//привели к нижнему регистру, убрали все пробелы, сравниваем строку с перевернутой
function isPalindrome1(str) {
  str = cleanString(str);
  return str === str.split('').reverse().join('');
}

//привели к нижнему регистру, убрали все пробелы, every для проверки, что каждый символ совпадает с соответствующим символом с конца строки
function isPalindrome2(str) {
  str = cleanString(str);
  return str.split('').every((char, index) => char === str[str.length - index - 1]);
}


//заводим два указателя, один идет с начала строки, второй с конца, сравниваем символы, на которые указывают эти указатели
//если символы разные, то это не палиндром, если они одинаковые, то первый индекс увеличим на один, а второй уменьшим
//повторяем до тех пор, пока первый индекс меньше второго
function isPalindrome3(str) {
  str = cleanString(str);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/*цикл, который будет выполняться до половины длины строки.
Сравнивает символы с обоих концов строки.
Если символ с одного конца не совпадает с символом с другого конца, то строка не является палиндромом.*/
function isPalindrome4(str) {
  str = cleanString(str);
  let n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - i - 1]) {
      return false;
    }
  }
  return true;
}

function cleanString(str) {
    return str.toLowerCase().replace(/ /g, "");
}


//проверяем
console.log(palindrome + (isPalindrome1(palindrome) ? " - это палиндром" : " - это не палиндром"));
console.log(palindrome + (isPalindrome2(palindrome) ? " - это палиндром" : " - это не палиндром"));
console.log(palindrome + (isPalindrome3(palindrome) ? " - это палиндром" : " - это не палиндром"));
console.log(palindrome + (isPalindrome4(palindrome) ? " - это палиндром" : " - это не палиндром"));


console.log(notPalindrome + (isPalindrome1(notPalindrome) ? " - это палиндром" : " - это не палиндром"));
console.log(notPalindrome + (isPalindrome2(notPalindrome) ? " - это палиндром" : " - это не палиндром"));
console.log(notPalindrome + (isPalindrome3(notPalindrome) ? " - это палиндром" : " - это не палиндром"));
console.log(notPalindrome + (isPalindrome4(notPalindrome) ? " - это палиндром" : " - это не палиндром"));