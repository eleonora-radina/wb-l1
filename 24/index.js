/*Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.
Требования:
данные должны загружаться при загрузке страницы
необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
необходимо реализовать клиентскую пагинацию (50 элементов на странице)
*/

const baseUrl = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true'
const table = document.getElementById('dataTable');
let data = [];
const itemsPerPage = 50;
let currentPage = 1;
let sortDirection = 'asc';
let currentSortColumn = null;

function getData() {
  return fetch(baseUrl)
    .then(res => res.json())
    .then((res) => {
      data = res;
      console.log(data);
      renderTable();
    })
    .catch((err) => { console.log(err); });
}


function renderTable() {
  let begin = (currentPage - 1) * itemsPerPage;
  let end = begin + itemsPerPage;
  const sliceData = data.slice(begin, end);

  // map используется для преобразования каждого объекта в строку с данными таблицы, метод join('') объединяет эти строки 
  // в одну строку, которая затем вставляется в контейнер с помощью innerHTML
  table.innerHTML = sliceData.map(rowData => `
    <tr>
      <td>${rowData.fname}</td>
      <td>${rowData.lname}</td>
      <td>${rowData.tel}</td>
      <td>${rowData.address}</td>
      <td>${rowData.city}</td>
      <td>${rowData.state}</td>
      <td>${rowData.zip}</td>
    </tr>
  `).join('');

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = i;

    if (i === currentPage) {
      listItem.classList.add('active');
    }

    // Добавляем обработчик события для переключения страницы
    link.addEventListener('click', function (event) {
      currentPage = parseInt(event.target.textContent);
      renderTable();
    });

    listItem.appendChild(link);
    pagination.appendChild(listItem);
  }
}

function sortData(columnName) {
  if (columnName === currentSortColumn) {
    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    sortDirection = 'asc';
  }

  let multiplier = sortDirection === 'asc' ? 1 : -1;

  data.sort(function (a, b) {
    if (a[columnName] > b[columnName]) return multiplier;
    if (a[columnName] < b[columnName]) return (multiplier * -1);
    return 0;
  });

  currentSortColumn = columnName;
  renderTable();
}

// Назначаем обработчики событий для заголовков столбцов
const headers = document.getElementsByTagName('th');
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', function (event) {
    let columnName = event.target.getAttribute('data-name');
    sortData(columnName);
  });
}

getData();