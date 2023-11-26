/*Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
112 сообщения
12 сообщений
1 сообщение
1024 пользователя
1026 пользователей
121 пользователь

Функцию надо упаковать в модуль.
*/


var WordDeclension = (function () {
  function getWordDeclension(number, wordForms) {
    // Проверяем, что переданы нужные формы слова
    if (!Array.isArray(wordForms) || wordForms.length !== 3) {
      console.error("Некорректные формы слова. Ожидаются 3 формы.");
      return "";
    }

    // Определение падежа
    function getCase(number) {
      number = Math.abs(number) % 100;
      var remainder = number % 10;

      if (number > 10 && number < 20) {
        return 2;
      }

      if (remainder > 1 && remainder < 5) {
        return 1;
      }

      if (remainder === 1) {
        return 0;
      }

      return 2;
    }

    var caseIndex = getCase(number);
    return number + " " + wordForms[caseIndex];
  }

  return {
    getWordDeclension: getWordDeclension
  };
})();

// Пример использования:
var numbers = [1, 12, 112, 121, 1024, 1026];
var forms1 = ["сообщение", "сообщения", "сообщений"];
var forms2 = ["пользователь", "пользователя", "пользователей"];

numbers.forEach(number => {
    console.log(WordDeclension.getWordDeclension(number, forms1));
});

numbers.forEach(number => {
    console.log(WordDeclension.getWordDeclension(number, forms2));
});