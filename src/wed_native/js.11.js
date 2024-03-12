// // Class

// // const car1 = {
// //   brand: "bmw",
// //   color: "black",
// //   startEngine() {
// //     console.log(`${this.brand} is started`);
// //   },
// // };

// // const car2 = {
// //   brand: "ferrari",
// //   color: "red",
// //   startEngine() {
// //     console.log(`${this.brand} is started`);
// //   },
// // };

// // car1.startEngine();
// // car2.startEngine();

// // ---------------------------------

// // function carCreator(brand, color) {
// //   const obj = {
// //     brand: brand,
// //     color: color,
// //     startEngine() {
// //       console.log(`${this.brand} is started`);
// //     },
// //   };
// //   return obj;
// // }

// // const car1 = carCreator("bmw", "black");
// // const car2 = carCreator("ferrari", "red");

// // console.log(car1);
// // console.log(car2);

// // car1.startEngine();

// // ---------------------------------

// // function CarCreator(brand, color) {
// //   // {}
// //   this.brand = brand;
// //   this.color = color;
// // }

// // CarCreator.prototype.startEngine = function () {
// //   console.log(`${this.brand} is started`);
// // };

// // const car1 = new CarCreator("bmw", "black");
// // const car2 = new CarCreator("ferrari", "red");

// // // console.log(car1);
// // // console.log(car2);

// // car1.startEngine();
// // car2.startEngine();

// // -----------------------------------

// class Car {
//   constructor(brand, color) {
//     // {}
//     this.brand = brand;
//     this.color = color;
//     this.weels = 4;
//   }
//   // startEngine() {
//   //   console.log(`${this.brand} is started`);
//   // }
//   // showColor = function () {
//   //   console.log(`${this.color}`);
//   // };
//   // weels = 4;
// }

// // // console.dir(Car);
// // // console.dir(CarCreator);

// // const car1 = new Car("bmw", "black");
// // const car2 = new Car("ferrari", "red");

// // // console.log(car1);
// // // console.log(car2);

// // // // car1.startEngine();
// // // car1.showColor();

// // console.log(car1.startEngine === car2.startEngine);
// // console.log(car1.showColor === car2.showColor);

// // -----------------------------------

// class Car {
//   #brand;
//   #speed;
//   constructor(brand, color, speed) {
//     this.#brand = brand;
//     this.color = color;
//     this.#speed = speed;
//   }
//   #validateSpeed(speed) {
//     if (speed < 50) {
//       throw new Error("wrong speed");
//     }
//     this.#speed = speed;
//   }
//   startEngine() {
//     console.log(`${this.#brand} is started`);
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   setBrand(newBrand) {
//     if (newBrand.length < 3) {
//       throw new Error("to short");
//     }
//     this.#brand = newBrand;
//   }
//   get brand() {
//     console.log("inside get");
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     if (newBrand.length < 3) {
//       throw new Error("to short");
//     }
//     this.#brand = newBrand;
//   }
//   get speed() {
//     return this.#speed;
//   }
//   set speed(speed) {
//     this.#validateSpeed(speed);
//     this.#speed = speed;
//   }
//   static compareCars(car1, car2) {
//     car1.speed > car2.speed
//       ? console.log(`${car1.brand} is faster`)
//       : console.log(`${car2.brand} is faster`);
//   }
//   static log(car1, car2) {
//     this.compareCars(car1, car2);
//   }
// }

// // Car.#validateSpeed(50);

// // const bmw = new Car("bmw", "black", 400);
// // const ferrari = new Car("ferrari", "black", 300);

// // Car.compareCars(bmw, ferrari);
// // // Car.compareCars(bmw, ferrari);

// // Car.log(bmw, ferrari);
// // bmw.log();

// console.log(car1.brand);
// car1.brand = "ferrari";
// // console.log(car1.brand);

// // console.log(car1.color);

// // -----------------------------------

class Car {
    #brand;
    constructor(brand, color, speed) {
        //{}
        this.#brand = brand;
        this.color = color;
        this.speed = speed;
        //return {}
    }
    startEngine() {
        console.log(`${this.#brand} is started`);
    }
    static compareCars(car1, car2) {
        car1.speed > car2.speed
            ? console.log(`${car1.brand} is faster`)
            : console.log(`${car2.brand} is faster`);
    }
    get brand() {
        return this.#brand;
    }
}

// class SuperCar {
// 	#brand
//   constructor(brand, color, speed, canFly) {
//     this.#brand = brand;
//     this.color = color;
//     this.speed = speed;
//   }
//   startEngine() {
//     console.log(`${this.#brand} is started`);
//   }
// 	fly() {
// 		console.log(`${this.#brand} is flying`);
// 	}
//   static compareCars(car1, car2) {
//     car1.speed > car2.speed
//       ? console.log(`${car1.brand} is faster`)
//       : console.log(`${car2.brand} is faster`);
//   }
// }

class SuperCar extends Car {
    constructor(brandForSuperCar, color, speed, canFly) {
        super(brandForSuperCar, color, speed); // {}
        this.canFly = canFly;
        this.brandForSuperCar = brandForSuperCar;
    }
    fly() {
        console.log(`${this.brandForSuperCar} is flying`);
    }
    startEngine() {
        // super.startEngine();
        console.log("extends");
    }
}

const superBmw = new SuperCar("bmw", "black", 200, true);
const superFerrari = new SuperCar("ferrari", "red", 300, true);

// console.dir(superBmw);

superBmw.startEngine();
// superBmw.fly();

// SuperCar.compareCars(superBmw, superFerrari);
