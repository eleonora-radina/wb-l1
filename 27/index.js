/*Задача: Добавить анимацию для элемента: 
Напишите функцию, которая добавляет анимацию для элемента на веб-странице, 
например, плавное изменение его положения или размера.
*/

const buttonToMove = document.querySelector('.button-move');
const buttonToEnlarge = document.querySelector('.button-enlarge');

function moveAnimation() {
  // Добавляем класс для анимации
  buttonToMove.classList.add('move-animation');

  // Убираем класс после завершения анимации (через 5 секунд)
  setTimeout(() => {
    buttonToMove.classList.remove('move-animation');
  }, 5000);
}

function enlargeAnimation() {
  buttonToEnlarge.classList.add('enlarge-animation');
  setTimeout(() => {
    buttonToEnlarge.classList.remove('enlarge-animation');
  }, 2000);
}

buttonToMove.addEventListener('click', () => moveAnimation());
buttonToEnlarge.addEventListener('click', () => enlargeAnimation());

