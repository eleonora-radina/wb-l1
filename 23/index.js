/*Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного пользователем пароля. 
Необходимо анализировать длину пароля, использование различных символов, 
наличие чисел и букв в разных регистрах. 
Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.
*/

const buttonCheck = document.getElementById('buttonCheck');

let recommendations = [];
let rating = 'Слабая сложность пароля';


function analyzePasswordComplexity() {
    let recommendations = [];
    let passwordInput = document.getElementById('password');
    let password = passwordInput.value;
    
    // минимальная длина пароля
    const minLength = 8;
  
    // проверка на наличие цифр, маленьких букв, заглавных букв, специальных символов
    const hasNumbers = /[0-9]/.test(password);
    const hasLetters = /[a-z]/.test(password);
    const hasCapitalLetters = /[A-Z]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const length = password.length;
  
    if (length >= minLength && hasNumbers && hasLetters && hasCapitalLetters && hasSpecialChars) {
      rating = 'Хороший пароль!';
      passwordInput.style.border = '2px solid #6B8E23';
    } else if (length >= minLength && (hasNumbers || hasLetters)) {
      rating = 'Средняя сложность пароля';
      passwordInput.style.border = '2px solid #FFA500';
    } else {
      passwordInput.style.border = '2px solid #8B0000';
    }
  
    if (length < minLength) {
      recommendations.push(`Увеличьте длину пароля как минимум до ${minLength} символов`);
    }
  
    if (!hasNumbers) {
      recommendations.push('Добавьте как минимум одну цифру');
    }
  
    if (!hasLetters) {
      recommendations.push('Добавьте как минимум одну строчную букву');
    }

    if (!hasCapitalLetters) {
      recommendations.push('Добавьте как минимум одну заглавную букву');
    }
  
    if (!hasSpecialChars) {
      recommendations.push('Добавьте как минимум один специальный символ');
    }

    document.querySelector('.recommendation').innerHTML = recommendations.map(item => `<p class="recommendItem">${item}</p>`).join('');
    document.querySelector('.rating').textContent = rating;
  }
  
  buttonCheck.addEventListener('click', () => analyzePasswordComplexity());
  
  
  