"use strict";
function greet(name) {
    console.log(name.toUpperCase());
}
function greet1(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("hola!");
}
greet1(undefined);
