/*Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
вычисление N-го числа в ряду Фибоначчи
вычисление всех чисел в ряду Фибоначчи до числа N
вычисление N-го простого числа
вычисление всех простых чисел до числа N

Будет плюсом, если задумаетесь и об оптимизации.

ряд Фибоначчи - 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел
*/


var CustomMath = (function () {
  function fib(n) {
    if (n <= 1)
      return n;

    if (n == 2)
      return 1;

    return fib(n - 2) + fib(n - 1);
  }

  function fibSeries(N) {
    var series = [];
    for (var i = 0; i < N; i++) {
      series.push(fib(i));
    }

    return series;
  }

  function isPrime(num) {
    if (num <= 1)
        return false;

    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0)
        return false;
    }

    return true;
  }

  function primeSeries(N) {
    var series = [];
    for (var i = 2; i < N; i++) {
      if (isPrime(i)) {
        series.push(i);
      }
    }

    return series;
  }

  return {
    fib: fib,
    fibSeries: fibSeries,
    isPrime: isPrime,
    primeSeries: primeSeries
  };
})();

let N = 5;
console.log('Число Фибоначчи N=' + N +': '  + CustomMath.fib(N));
console.log('Числа Фибоначчи до N=' + N + ': ' + CustomMath.fibSeries(N));
console.log(N + (CustomMath.isPrime(N) ? ' - простое число' : ' - не простое число'));
console.log('Простые числа до ' + N + ': ' + CustomMath.primeSeries(N));
