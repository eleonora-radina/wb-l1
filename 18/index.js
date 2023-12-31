/*Подсчитать максимальный объем данных, 
который можно записать в localStorage вашего браузера.

Лимит для localStorage в браузере зависит от конкретной реализации браузера и настроек пользователя. 
Спецификация HTML5 рекомендует минимальный лимит в 5 мегабайт для каждого источника (протокола/домена), 
но браузеры могут предоставлять больший объем в зависимости от их политики безопасности и других факторов.

Чтобы узнать максимальный объем данных, 
который можно записать в localStorage вашего конкретного браузера, вы можете использовать следующий код:

Этот код будет пытаться записать данные в localStorage до тех пор, 
пока не выбросится исключение (которое возникнет, когда будет достигнут лимит). 
Затем он выводит максимальный объем данных, который удалось записать до возникновения ошибки. 
Обратите внимание, что выполнение этого кода может повлиять на данные в вашем localStorage, 
так что используйте его с осторожностью.

*/
