/*Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным,
и false в противном случае. Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.*/


//вычисляет сумму всех делителей числа (кроме самого числа) и сравнивает ее с исходным числом.
function isStrangeNumber(number) {
  if (number <= 1) {
    return false; // Не рассматриваем числа меньше или равные 1
  }

  let sumOfDivisors = 0;
  for (let i = 1; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      sumOfDivisors += i;
    }
  }

  return number === sumOfDivisors;
}


for (let testNumber = 2; testNumber <= 30; testNumber++)
    console.log(testNumber + (isStrangeNumber(testNumber) ? " - это странное число" : " - это не странное число"));
