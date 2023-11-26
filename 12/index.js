/*Задача на работу с объектами: создайте объект, представляющий собой книгу.
Объект должен иметь свойства, такие как: название книги, автор и год издания.
Напишите методы для получения и изменения значений свойств книги.
*/

let book = {
  name: "Имя книги",
  author: "Имя автора",
  yearOfIssue: 2022,

  getName: function () {
    return this.name;
  },
  setName: function (name) {
    this.name = name;
  },
  getAuthor: function () {
    return this.author;
  },
  setAuthor: function (author) {
    this.author = author;
  },
  getYearOfIssue: function () {
    return this.yearOfIssue;
  },
  setYearOfIssue: function (yearOfIssue) {
    this.yearOfIssue = yearOfIssue;
  }
};

// Пример использования методов
console.log(book.getName());
book.setName("Новое Имя Книги");
console.log(book.getName());

console.log(book.getAuthor());
book.setAuthor("Новый Автор");
console.log(book.getAuthor());

console.log(book.getYearOfIssue());
book.setYearOfIssue(2023);
console.log(book.getYearOfIssue());
