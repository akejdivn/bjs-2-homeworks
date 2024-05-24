function parseCount(quantity) {
	let num = Number(quantity)
	if (isNaN(num) === true) {
		throw new Error("Невалидное значение")
	} else {
		return Number.parseFloat(num)
	}
}

function validateCount(quantity) {
	let num = Number(quantity)
	try {
		return parseCount(num)
	} catch (error) {
		return new Error
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if ((this.a + this.b) < this.c || (this.a + this.c) < this.c || (this.b + this.c) < this.c) {
			throw new Error("Треугольник с такими сторонами не существует")
		}


	}
	get perimeter() {
		return this.a + this.b + this.c
	}
	get area() {
		let p = (this.a + this.b + this.c) * 0.5;
		let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(s.toFixed(3))
	}
}

function getTriangle(a, b, c) {

	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			getArea: function() {
				return "Ошибка! Треугольник не существует"
			},
			getPerimeter: function() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}