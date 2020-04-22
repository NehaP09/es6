// // ES8 Async and Await

// async function async_one() {
//   return "one";
// }
// async function async_two() {
//   throw new Error("issue with async");
// }
// async_one().then(res => console.log(res));
// async_two().catch(err => console.log(err));

// //////////////////////////////////////////////////////

// async function async_three() {
//   return "three";
// }
// async function async_four() {
//   return "four";
// }
// async function async_five() {
//   const three = await async_three();
//   console.log(three);
//   const four = await async_four();
//   console.log(four);
// }
// async_five();

// async function async_six() {
//   const [res_three, res_four] = await Promise.all([
//     async_three(),
//     async_four()
//   ]);
//   console.log(res_three, res_four);
// }
// async_six();
