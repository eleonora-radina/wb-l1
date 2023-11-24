/*Задача о коллекции функций: у вас есть массив функций, 
напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер. 
Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
Другими словами, нужно выполнить следующие шаги:
Вызвать первую функцию из массива.
После завершения работы первой функции вызвать вторую функцию.
После завершения работы второй функции вызвать третью функцию.
И так далее, пока все функции в массиве не будут вызваны по порядку.

Этот код создает функцию executeFunctionsSequentially, 
которая принимает массив функций и текущий индекс. 
Она вызывает функцию с текущим индексом, передавая ей колбэк, 
который будет вызываться после завершения текущей функции. 
Колбэк затем вызывает executeFunctionsSequentially с инкрементированным индексом, запуская следующую функцию в массиве. 
Этот процесс продолжается до тех пор, пока все функции в массиве не будут вызваны по порядку.
*/