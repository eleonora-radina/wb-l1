/*Реализовать виджет, отображающий список постов из любого паблика в VK 
(подойдет любой паблик, где постов очень много). 
Например, с помощью этой функции API VK. Виджет должен иметь фиксированные размеры и возможность прокрутки. 
При прокрутке содержимого виджета до конца должны подгружаться новые посты. 
Необходимо реализовать возможность кэширования уже загруженных данных: 
если пользователь закрыл страницу, а потом снова открыл ее, 
виджет должен отображать все загруженные ранее данные (новые данные должны подгружаться из учетом уже загруженных ранее).

При переполнении localStorage, данные, загруженные последними должны вытеснять данные загруженные первыми.

использование токена в фронтенде не рекомендуется в продакшене из-за потенциальных проблем безопасности. 
В реальном проекте, следует реализовать серверную сторону для безопасной работы с API VK.
*/

const widget = document.getElementById('widget');
let results = [];

let options = {
  root: widget,
  threshold: 0.25,
};

let callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);

      const offset = widget.children.length;
      loadPostsAndRender(offset);
    }
  });
};

let observer = new IntersectionObserver(callback, options);


function getPosts(offset = 0) {
  const apiUrl = 'https://cors-anywhere.herokuapp.com/api.vk.com/method/wall.get';
  const accessToken = 'a502e7cda502e7cda502e7cd52a6149e01aa502a502e7cdc06555c0e58a4e322cb7df1f'; // Замените на ваш токен
  const ownerId = -98541920; // Замените на ID паблика (отрицательное значение)
  const count = 10;

  const url = `${apiUrl}?owner_id=${ownerId}&offset=${offset}&count=${count}&filter=owner&access_token=${accessToken}&v=5.131`;

  return fetch(url)
   .then(response => response.json())
   .then(data => data.response.items);
}

function renderPosts(posts) {
  posts.forEach(post => {
    const postElement = document.createElement('div');

    postElement.textContent = post.text;
    postElement.classList.add('post');

    const postDate = document.createElement('p');
    postDate.classList.add('post__date');
    postDate.textContent = new Date(post.date * 1000).toLocaleString();
    postElement.appendChild(postDate);

    post.attachments.forEach(attachment => {
      if(attachment.type === 'photo') {
        const postImg = document.createElement('img');
        postImg.classList.add('post__img');
        postImg.src = attachment.photo.sizes[3].url;
        postElement.appendChild(postImg);
      }
    });

    widget.appendChild(postElement);
  });

  observer.observe(document.querySelector('.post:last-child'));
}

//Основной сценарий использования DOMContentLoaded: инициализация интерфейса и первые обращения к серверу.
// ??
document.addEventListener('DOMContentLoaded', function() {
  const cachedPosts = localStorage.getItem('cachedPosts');
  if (cachedPosts) {
    renderPosts(JSON.parse(cachedPosts));
  } else {
    // Загружаем первую порцию постов
    loadPostsAndRender(0);
  }
});

function loadPostsAndRender(offset) {
  getPosts(offset)
   .then(posts => {
      renderPosts(posts);
      cachePosts(posts); // Кэшируем загруженные посты
    })
   .catch(error => console.error('Error loading posts:', error));
}

function cachePosts(posts) {
  let cachedPosts = JSON.parse(localStorage.getItem('cachedPosts')) || [];

  // Если localStorage переполнен, удаляем старые данные
  //  в большинстве случаев это находится в диапазоне от 2.5 до 5 МБ. 
  // Поэтому 5000000 было использовано как предполагаемый предел размера данных в localStorage.
  
  while (JSON.stringify(cachedPosts).length + JSON.stringify(posts).length > 5000000) {
    cachedPosts.shift(); // Удаляем первый элемент
  }

  cachedPosts.push(posts);
  localStorage.setItem('cachedPosts', JSON.stringify(cachedPosts));
}


//loadPostsAndRender(0);