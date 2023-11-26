const moment = require('moment');

// Функция для получения текущей даты и времени
function getCurrentDateTime() {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

// Функция для форматирования переданной даты
function formatDateTime(date, format = 'YYYY-MM-DD HH:mm:ss') {
  return moment(date).format(format);
}

// Экспортируемые функции
module.exports = {
  getCurrentDateTime,
  formatDateTime
};
