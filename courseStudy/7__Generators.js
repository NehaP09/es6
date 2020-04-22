// function* evens() {
//   let reset = false;
//   let count = 2;
//   while (true) {
//     count += 2;
//     if (reset) count = 0;
//     reset = yield count;
//   }
// }

// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next(2).value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);

// //////////////////////////////////////////////////////

// function* countMaker() {
//   let count = 0;
//   while (count < 6) yield count++;
// }

// function* letterMaker() {
//   yield "a", yield "b", yield "c", yield "d";
// }

// let countGen = countMaker();
// let letterGen = letterMaker();

// console.log(letterGen.next().value);
// console.log(countGen.next().value);
// console.log(letterGen.next().value);
// console.log(countGen.next().value);
