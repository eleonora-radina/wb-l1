/*Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис, 
который разрешается с данными об изображении, когда оно загружено. 
Когда говорится "промис разрешается с данными об изображении", 
это означает, что промис должен быть успешно выполнен (resolved) 
с данными об изображении после того, как изображение будет загружено.

*/

function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
  
      image.onload = function () {
        resolve({
          element: image,
          width: image.width,
          height: image.height
        });
      };
  
      image.onerror = function () {
        reject(new Error(`Failed to load image at: ${url}`));
      };
  
      image.src = url;
    });
  }
  
  // Example 
  const imageUrl = 'https://example.com/image.jpg';
  
  loadImage(imageUrl)
    .then(data => {
      console.log(`Image successfully loaded. Size: ${data.width}x${data.height}`);
    })
    .catch(error => {
      console.error(error.message);
    });
  