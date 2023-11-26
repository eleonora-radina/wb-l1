/*Необходимо реализовать простое поле ввода адреса с функцией геокодинга: 
пользователь вводит данные в поле с помощью одного из геоинформационных сервисов 
(Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. 
Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.

Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.
*/

function geocodeService(address, callback) {
    // Здесь можно использовать API выбранного геокодер сервиса (Яндекс.Карты, ДаДата, GraphHopper и т.д.)
    // Реализация этой функции зависит от конкретного сервиса, который вы выберете.
    // В данном примере используется фиктивная реализация для целей демонстрации.
    setTimeout(() => {
      const results = [
        'Результат 1',
        'Результат 2',
        'Результат 3'
      ];
      callback(results);
    }, 500);
  }
  
  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const addressInput = document.getElementById('addressInput');
    const addressResults = document.getElementById('addressResults');
  
    const debouncedGeocode = debounce(geocode, 300);
    const throttledGeocode = throttle(geocode, 1000);
  
    addressInput.addEventListener('input', function () {
      // В данном примере используется либо debouncedGeocode, либо throttledGeocode,
      // в зависимости от требований к частоте запросов к геокодеру.
      debouncedGeocode(addressInput.value);
    });
  
    function geocode(address) {
      if (!address) {
        addressResults.style.display = 'none';
        return;
      }
  
      geocodeService(address, function (results) {
        displayResults(results);
      });
    }
  
    function displayResults(results) {
      addressResults.innerHTML = '';
      results.forEach(result => {
        const option = document.createElement('option');
        option.value = result;
        addressResults.appendChild(option);
      });
      addressResults.style.display = 'block';
    }
  });