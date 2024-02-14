// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize = Size.Medium;

//if we write const keyword , code will be more optimized code;
const enum Size2 {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
let mySize2 = Size2.Medium;

console.log(mySize);