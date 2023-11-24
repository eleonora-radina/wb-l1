/*Задача: Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице 
и выполняет определенные действия с этими данными, 
например, отправляет их на сервер или отображает всплывающее окно с результатами.
*/

const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const doneButton = document.querySelector('.form__btn');

function submitForm() {
  // Получаем значения из полей ввода
  const nameValue = nameInput.value;
  const surnameValue = surnameInput.value;

  // Проверяем, что оба поля заполнены
  if (nameValue && surnameValue) {
    alert(`Прекрасный/ая ${nameValue} ${surnameValue},\nжелаем вам самого лучшего дня!!!`);
  } else {
    alert('Введите ваше имя для пожелания :)');
  }

  /*Отправка на сервер
    fetch('url', {
      method: 'POST',
      body: JSON.stringify({ nameValue, surnameValue }),
      headers: { 'Content-Type': 'application/json' }
    });
  */
}

doneButton.addEventListener('click', () => submitForm());  