const myName: string = "Sasa";

const ten: number = 10;

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const joinstring = (a: string, b: string): string => {
//   return a + b;
// };
// function add(a: number, b: number): number {
//   return a + b;
// }

// const joinstring = function (a: string, b: string): string {
//   return a + b;
// };

// interface Post {
//   title: string;
//   day: number;
//   published: boolean;
// }

// const post: { title: string; day: number; published: boolean } = {
//   title: "my post",
//   day: 5,
//   published: true,
// };
// const post = {
//   title: "my post",
//   day: 5,
//   published: true,
// };

// const postPrint = (postToPrint: Post) => {
//   return `${postToPrint.title}(${postToPrint.day} days old)`;
// };

// postPrint(post);

// class Car {
//   color: string;
//   year: number;
//   constructor(color: string, year: number) {
//     (this.color = color), (this.year = year);
//   }
//   drive() {
//     console.log("brmmmm");
//   }
// }

// const myCar = new Car("red", 2000);
// myCar.drive();

// console.log(`My car color is ${myCar.color} and car year is ${myCar.year}`);

// class Car {
//   constructor(private color: string, public year: number) {}
//   drive() {
//     this.putInGear();
//     this.pressPedal();
//     this.turnWeel();
//   }
//   putInGear() {
//     console.log("gear");
//   }
//   pressPedal() {
//     console.log("gas");
//   }
//   turnWeel() {
//     console.log("brmmm");
//   }
// }

// const myCar = new Car("red", 2020);

// console.log(myCar.year);
// myCar.drive();
// const Component = (target: any) => {
//   console.log(target);
// };

// @Component
// class Car {}

// import { Car } from "./Car";
// const myCar = new Car();
// //console.log(myCar);

// //console.log(myCar.year);

// myCar.drive(200);

// interface Driveable {
//   speed: number;

//   drive(): string;
// }

// class Car implements Driveable {
//   speed = 210;

//   drive() {
//     return `I am driving  at ${this.speed}`;
//   }
// }

// const myCar = new Car();

// const startDriving = (vihicle: Driveable) => {
//   return vihicle.drive();
// };

// startDriving(myCar);
// console.log(startDriving(myCar));

// class NumberHolder {
//   value: number;
// }
// class StringHolder {
//   value: string;
// }
// class BooleanHolder {
//   value: boolean;
// }

// class ValueHolder<TypeForStoringValues> {
//   value: TypeForStoringValues;
// }

// const numberHolder = new ValueHolder<number>();

// numberHolder.value;

class ValueHolder<T> {
  value: T;
}
