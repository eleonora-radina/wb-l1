/*Задача о сортировке объектов:
у вас есть массив объектов вида { name: 'John', age: 25 }.
Напишите код, который сортирует этот массив по возрастанию возраста,
а при равных возрастах сортирует по алфавиту по полю name.*/

var people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Alice', age: 25 }
];

people.sort(function (a, b) {
    if (a.age === b.age) {
        // При равных возрастах сортируем по полю name
        return a.name.localeCompare(b.name);
    }
    // Сортировка по возрастанию возраста
    return a.age - b.age;
});

console.log(people);
