/*Задача: Рекурсивный обход дерева DOM: Напишите функцию, которая рекурсивно обходит дерево DOM, 
начиная с указанного элемента, и выполняет определенное действие с каждым узлом 
(например, выводить информацию о теге в консоль).
*/

function roundsDOM(element, action) {
  // Выполняем действие с текущим узлом
  action(element);

  // Рекурсивно обходим дочерние узлы
  for (let i = 0; i < element.children.length; i++) {
    roundsDOM(element.children[i], action);
  }
}

// Пример использования функции для вывода информации о тегах в консоль
const rootElement = document.querySelector("main");
function action(node) {
  console.log(`Элемент ${node.tagName}`);
};

roundsDOM(rootElement, action);
