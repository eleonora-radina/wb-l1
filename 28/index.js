/*Задача: Создать и добавить элемент с использованием шаблонов: 
Напишите функцию, которая создает новый элемент с использованием шаблонов 
(например, с помощью тега <template>) и добавляет его в DOM.
*/

const tasksContainer = document.querySelector('.container');
const addButton = document.querySelector('.input__btn');

function addTask(taskValue) {
  // Чтобы получить содержимое template, нужно обратиться к его свойству content
  const taskTemplate = document.querySelector('#task-template').content;

  // Клонируем содержимое шаблона
  const taskElement = taskTemplate.querySelector('.task').cloneNode(true);

  taskElement.querySelector('.task__title').textContent = taskValue;

  // Добавляем клонированный элемент в DOM
  tasksContainer.append(taskElement);
}

addButton.addEventListener('click', function () {
  const task = document.querySelector('.input__text');
  addTask(task.value);
  task.value = '';
});
  