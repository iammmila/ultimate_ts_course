function greet(name: string) {
  console.log(name.toUpperCase());
}
// Argument of type 'null' is not assignable to parameter of type 'string'.:
// greet(null);
// if we change in tsconfig to checking null, we dont find any error; (but we never change true to false.!)

function greet1(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("hola!");
}

greet1(undefined);
