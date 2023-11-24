/*Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. 
Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).*/

let inputString = "А роза упала на лапу Азора";
let inputString2 = "Я совсем не палиндром";

//привели к нижнему регистру, убрали все пробелы, сравниваем строку с перевернутой
function isPalindrome1(str) {
  str = str.toLowerCase().replace(/ /g, "");
  return str === str.split('').reverse().join('');
}

//привели к нижнему регистру, убрали все пробелы, every для проверки, что каждый символ совпадает с соответствующим символом с конца строки
function isPalindrome2(str) {
  str = str.toLowerCase().replace(/ /g, "");
  return str.split('').every((char, index) => char === str[str.length - index - 1]);
}


//заводим два указателя, один идет с начала строки, второй с конца, сравниваем символы, на которые указывают эти указатели
//если символы разные, то это не палиндром, если они одинаковые, то первый индекс увеличим на один, а второй уменьшим
//повторяем до тех пор, пока первый индекс меньше второго
function isPalindrome3(str) {
  str = str.toLowerCase().replace(/ /g, "");
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
  str = str.toLowerCase().replace(/ /g, "");
  let n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - i - 1]) {
      return false;
    }
  }
  return true;
}


//проверяем
if (isPalindrome1(inputString)) {
  console.log(inputString + " - это палиндром");
} else {
  console.log(inputString + " - это не палиндром");
}

if (isPalindrome2(inputString)) {
  console.log(inputString + " - это палиндром");
} else {
  console.log(inputString + " - это не палиндром");
}

if (isPalindrome3(inputString)) {
  console.log(inputString + " - это палиндром");
} else {
  console.log(inputString + " - это не палиндром");
}

if (isPalindrome4(inputString)) {
  console.log(inputString + " - это палиндром");
} else {
  console.log(inputString + " - это не палиндром");
}

if (isPalindrome1(inputString2)) {
  console.log(inputString2 + " - это палиндром");
} else {
  console.log(inputString2 + " - это не палиндром");
}

if (isPalindrome2(inputString2)) {
  console.log(inputString2 + " - это палиндром");
} else {
  console.log(inputString2 + " - это не палиндром");
}

if (isPalindrome3(inputString2)) {
  console.log(inputString2 + " - это палиндром");
} else {
  console.log(inputString2 + " - это не палиндром");
}

if (isPalindrome4(inputString2)) {
  console.log(inputString2 + " - это палиндром");
} else {
  console.log(inputString2 + " - это не палиндром");
}