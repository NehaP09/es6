// // JavaScript Generator
// function* arrayGenIterator() {
//   yield* arguments;
// }

// var it = arrayGenIterator(1, 2, 3);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// //////////////////////////////////////////////
// // JavaScript Iterator
// const arrayIterator = array => {
//   let index = 0;
//   return {
//     next: () => {
//       if (index < array.length) {
//         let item = array[index];
//         index += 1;
//         return item;
//       }
//     }
//   };
// };

// let itr = arrayIterator([1,2,3]);
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
