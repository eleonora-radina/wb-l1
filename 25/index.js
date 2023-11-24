/*Задача: Создать и добавить стиль для элемента: 
Напишите функцию, которая создает новый элемент, 
добавляет его в DOM и устанавливает для него стиль с помощью CSS.
*/

const addButton = document.querySelector('.input__btn');

function createAndStyleElement() {
  const newElement = document.createElement('p');
  const text = document.querySelector('.input__text').value;
  const size = document.querySelector('.input__font-size').value;

  newElement.textContent = text;
  newElement.style.fontSize = `${size}px`;
  newElement.style.textAlign = 'center';
  newElement.style.marginBottom = '25px';

  // Добавляем элемент в DOM
  document.body.appendChild(newElement);
}


addButton.addEventListener('click', () => createAndStyleElement())
