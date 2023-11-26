/*Задача на классы и наследование: создайте базовый класс Shape (фигура),
который имеет методы для расчета площади и периметра.
Затем создайте подклассы, представляющие различные фигуры,
такие как прямоугольник, круг и треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.
*/

// Базовый класс Shape (фигура)
class Shape {
  constructor() {
    this.name = "";
  }

  // Метод для расчета площади
  getSquare() {}

  // Метод для расчета периметра
  getPerimeter() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getSquare() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(rad) {
    super();
    this.rad = rad;
  }

  getSquare() {
    return Math.PI * this.rad * this.rad / 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.rad;
  }
}

class Triangle extends Shape {
  constructor(A, B, C) {
    super();
    this.A = A;
    this.B = B;
    this.C = C;
  }

  getSquare() {
    // Формула Герона
    const s = (this.A + this.B + this.C) / 2;
    return Math.sqrt(s * (s - this.A) * (s - this.B) * (s - this.C));
  }

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
