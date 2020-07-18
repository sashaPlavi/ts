export class Car {
  year: number;
  constructor() {
    this.year = 2000;
  }
  drive(speed: number) {
    console.log(`driving at ${speed} km per hour`);
  }
}

// const myCar = new Car();
// console.log(myCar);

// console.log(myCar.year);
