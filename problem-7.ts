/*
Problem 7:
Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
6 (assuming current year is 2024)
*/

class Car {
  constructor(public make: string, public model: string, public year: number) {}

  getCarAge():string {
    const currentYear = new Date().getFullYear();
    return `${currentYear - this.year} (assuming current year is ${currentYear})`;
  }
}

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
