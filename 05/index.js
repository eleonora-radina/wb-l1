/*Разработайте функцию преобразования JSON в связный список.
На входе функция должна получать JSON, содержащий список объектов,
на выходе объект, представляющий из себя односвязный список.*/

function jsonToLinkedList(jsonArray) {
  if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
    console.error("Некорректный входной JSON-массив.");
    return null;
  }

  // Создаем первый элемент списка
  var head = { value: jsonArray[0].value, next: null };
  var current = head;

  // Проходим по массиву и создаем связанный список
  for (var i = 1; i < jsonArray.length; i++) {
    var next = { value: jsonArray[i].value, next: null };
    current.next = next;
    current = next;
  }

  return head;
}

// Пример использования:

var jsonArray = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 }
];

var linkedList = jsonToLinkedList(jsonArray);

console.log(linkedList);

var linkedListString = "";
var current = linkedList;
do {
  linkedListString += current.value + (current.next === null ? '' : ' => ');
  current = current.next;
} while (current !== null);
console.log(linkedListString);
