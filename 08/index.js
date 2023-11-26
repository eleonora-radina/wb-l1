/*Задача о замыканиях: напишите функцию,
которая будет принимать массив функций и возвращать новую функцию,
которая вызывает каждую функцию в этом массиве и возвращает массив результатов,
полученных после вызова каждой функции.*/

/*Функция принимает массив функций и возвращает новую функцию, которая проходит по переданному массиву функций,
вызывает каждую из них и добавляет результаты в массив.

После завершения вызова всех функций, возвращается массив результатов.*/
function executeFunctionsAndGetResults(functions) {
  return function () {
    var results = [];
    for (var i = 0; i < functions.length; i++) {
      results.push(functions[i]());
    }
    return results;
  };
}

var functionsArray = [
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  }
];

var results = executeFunctionsAndGetResults(functionsArray)();
console.log(results);
