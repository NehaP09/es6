// ////////////////////////////////////////////////////////

// // TODO
// // * add a 'color' field to the prototype
// // * add a 'bio' method that *returns*:
// //      A ${this.color} ${this.make} made in ${this.year}.

// function Vehicle(make, year) {
//   this.make = make;
//   this.year = year;
// }

// Vehicle.prototype.color;
// Vehicle.prototype.bio = function() {
//   return `A ${this.color} ${this.make} made in ${this.year}`;
// };

// let s = new Vehicle("Tesla", 2017);
// s.color = "black";

// ////////////////////////////////////////////////////////

// function Wizard(name, house, pet) {
//   this.name = name;
//   this.house = house;
//   this.pet = pet;

//   this.greet = () => `I'm ${this.name} from ${this.house}.`;
// }

// Wizard.prototype.pet_name;

// Wizard.prototype.info = function() {
//   return `I have a ${this.pet} named ${this.pet_name}.`;
// };

// let harry = new Wizard("Harry Potter", "Gryffindor", "owl");
// harry.pet_name = "Hedwig";

// console.log(harry);
// console.log(harry.info());

// ////////////////////////////////////////////////////////

// import Animal from "./Animal";

// class Lion extends Animal {
//   constructor(name, height, color) {
//     super(name, height);
//     this.color = color;
//   }

//   hello() {
//     console.log(`Hi! I am ${this.name} from Pride Rock!`);
//   }
// }

// let king = new Animal("Mufasa", 4.5);
// console.log(king);
// king.hello();

// let son = new Lion("Simba", 2, "golden");
// console.log(son);
// son.hello();

// ////////////////////////////////////////////////////////

// class Calculator {
//   static multiply(a, b) {
//     return a * b;
//   }

//   static add(a, b) {
//     return a + b;
//   }
// }

// let a = Calculator.add(5, 7);
// console.log(a);
