/*Задача о коллекции функций: у вас есть массив функций,
напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер.
Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
Другими словами, нужно выполнить следующие шаги:
Вызвать первую функцию из массива.
После завершения работы первой функции вызвать вторую функцию.
После завершения работы второй функции вызвать третью функцию.
И так далее, пока все функции в массиве не будут вызваны по порядку.
*/

var functionsArray = [
    function (callback) {
        console.log("Function 1 executed.");
        callback();
    },
    function (callback) {
        console.log("Function 2 executed.");
        callback();
    },
    function (callback) {
        console.log("Function 3 executed.");
        callback();
    }
];

// Рекурсивная функция для последовательного выполнения массива функций functions, начиная с индекса index
function executeFunctionsSequentially(functions, index) {
    if (index < functions.length && index >= 0) {
        // func - функция для выполнения
        var func = functions[index];
        // Вызываем func и передаем в неё callback для вызова следующей функции
        func(() => executeFunctionsSequentially(functions, ++index));
    } else {
        return;
    }
}

// Пример использования: Запуск выполнения функций c индекса 0
executeFunctionsSequentially(functionsArray, 0);
