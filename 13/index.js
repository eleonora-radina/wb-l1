/*Задача на классы и наследование: создайте базовый класс Shape (фигура),
который имеет методы для расчета площади и периметра.
Затем создайте подклассы, представляющие различные фигуры,
такие как прямоугольник, круг и треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.
*/

// Базовый класс Shape (фигура)
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Метод для расчета площади
  getSquare() {
    return undefined;
  }

  // Метод для расчета периметра
  getPerimeter() {
    return undefined;
  }
}

// Подкласс Rectangle расширяет базовый класс Shape
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Переопределение метода для расчета площади прямоугольника
  getSquare() {
    return this.width * this.height;
  }

  // Переопределение метода для расчета периметра прямоугольника
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Подкласс Circle расширяет базовый класс Shape
class Circle extends Shape {
  constructor(color, R) {
    super(color);
    this.R = R;
  }

  // Переопределение метода для расчета площади круга
  getSquare() {
    return Math.PI * this.R * this.R / 2;
  }

  // Переопределение метода для расчета длины окружности (периметр круга)
  getPerimeter() {
    return 2 * Math.PI * this.R;
  }
}

// Подкласс Triangle расширяет базовый класс Shape
class Triangle extends Shape {
  constructor(color, A, B, C) {
    super(color);
    this.A = A;
    this.B = B;
    this.C = C;
  }

  // Переопределение метода для расчета площади треугольника
  getSquare() {
    // Формула Герона
    const s = (this.A + this.B + this.C) / 2;
    return Math.sqrt(s * (s - this.A) * (s - this.B) * (s - this.C));
  }

  // Переопределение метода для расчета периметра треугольника
  getPerimeter() {
    return this.A + this.B + this.C;
  }
}

// Пример использования классов и наследования
const rectangle = new Rectangle("Красный", 5, 10);
console.log("Площадь прямоугольника:", rectangle.getSquare());
console.log("Периметр прямоугольника:", rectangle.getPerimeter());

const circle = new Circle("Синий", 3);
console.log("Площадь круга:", circle.getSquare());
console.log("Периметр круга:", circle.getPerimeter());

const triangle = new Triangle("Зеленый", 3, 4, 5);
console.log("Площадь треугольника:", triangle.getSquare());
console.log("Периметр треугольника:", triangle.getPerimeter());
