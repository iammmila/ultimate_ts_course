// For each of these values, what type will the TypeScript compiler infer?

let a = 100; // Number
let b = "Coffee"; //String
let c = [true, false, false]; //  boolean[]
let d = { age: 20 }; //{age:number}
let e = [3]; //number[]
let f; //any
let g = []; //any[]

// What are the compilation errors in each of the following code snippets?
let song: {
  title: string;
  releaseYear: number;
} = { title: "My song" }; //Property releaseYear is not given when initializing the object.

let prices = [100, 200, 300];
prices[0] = "$100"; //We’ve declared a number[] but we’re trying to store a string in this array.


function myFunc(a: number, b: number): number { }
// myFunc is expected to return a number but nothing is returned.