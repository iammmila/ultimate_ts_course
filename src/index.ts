import { calculateTax } from "./tax.js";

let tax = calculateTax(1000);
console.log(tax);
//if again there is an error, just in tsconfig file we configure the module to commonjs. solves.
