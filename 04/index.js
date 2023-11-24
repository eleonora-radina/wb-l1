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

console.log(WordDeclension.getWordDeclension(112, ["сообщение", "сообщения", "сообщений"]));
console.log(WordDeclension.getWordDeclension(12, ["сообщение", "сообщения", "сообщений"]));
console.log(WordDeclension.getWordDeclension(1, ["сообщение", "сообщения", "сообщений"]));

console.log(WordDeclension.getWordDeclension(1024, ["пользователь", "пользователя", "пользователей"]));
console.log(WordDeclension.getWordDeclension(1026, ["пользователь", "пользователя", "пользователей"]));
console.log(WordDeclension.getWordDeclension(121, ["пользователь", "пользователя", "пользователей"]));
