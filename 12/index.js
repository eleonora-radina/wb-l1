/*Задача на работу с объектами: создайте объект, представляющий собой книгу.
Объект должен иметь свойства, такие как: название книги, автор и год издания.
Напишите методы для получения и изменения значений свойств книги.
*/

const book = {
  title: 'Война и мир',
  author: 'Лев Толстой',
  yearOfIssue: 1873,

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
book.setName("Новое Название Книги");
console.log(book.getName());

console.log(book.getAuthor());
book.setAuthor("Новый Автор");
console.log(book.getAuthor());

console.log(book.getYearOfIssue());
book.setYearOfIssue(2023);
console.log(book.getYearOfIssue());

console.log("Новое название книги:", book.getName());
console.log("Новый автор книги:", book.getAuthor());
console.log("Новый год издания:", book.getYearOfIssue());
