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
    if (n <= 1) {
      return n;
    } else {
      return fib(n - 2) + fib(n - 1);
    }
  }

  function fibSeries(N) {
    var series = [];
    for (var i = 0; i < N; i++) {
      series.push(fib(i));
    }
    return series;
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function primeSeries(N) {
    var series = [];
    for (var i = 2; i <= N; i++) {
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


console.log(CustomMath.fib(5));
console.log(CustomMath.fibSeries(8));
console.log(CustomMath.primeSeries(4));
console.log(CustomMath.primeSeries(20));
