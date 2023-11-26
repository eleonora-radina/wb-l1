/*Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await 
для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

*/

function performAsyncOperation(delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Operation completed in ${delay / 1000} seconds`);
      }, delay);
    });
  }
  
  async function asyncFunction() {
    try {
      console.log('Start of the asynchronous function');
  
      
      const operationResult1 = await performAsyncOperation(2000);
      console.log(operationResult1);
  
      const operationResult2 = await performAsyncOperation(1000);
      console.log(operationResult2);
  
      console.log('End of the asynchronous function');
  
      return 'All asynchronous operations completed';
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  asyncFunction()
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Global error:', error));
  