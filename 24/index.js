/*Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.

Требования:
данные должны загружаться при загрузке страницы
необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
необходимо реализовать клиентскую пагинацию (50 элементов на странице)

*/
  const baseUrl = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true'
  const table = document.getElementById('dataTable');
  let data = [];

  // Fetch data from the provided source
  fetch(baseUrl)
    .then(response => response.json())
    .then(result => {
      data = result;
      renderTable();
    });

  function renderTable() {
    table.innerHTML = '';

    // Display table header
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      th.addEventListener('click', () => sortData(key));
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Display table rows based on pagination
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    for (let i = startIndex; i < endIndex && i < data.length; i++) {
      const rowData = data[i];
      const row = document.createElement('tr');
      Object.values(rowData).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
      });
      table.appendChild(row);
    }

    // Display pagination controls
    renderPagination();
  }

  function sortData(column) {
    data.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      return sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable();
  }

  function renderPagination() {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginationDiv = document.createElement('div');
    paginationDiv.innerHTML = `Page: `;
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', () => {
        currentPage = i - 1;
        renderTable();
      });
      paginationDiv.appendChild(button);
    }

    document.body.appendChild(paginationDiv);
  }

  let currentPage = 0;
  const itemsPerPage = 50;
  let sortDirection = 'asc';

  renderTable();

