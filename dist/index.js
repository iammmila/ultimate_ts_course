"use strict";
function echo1(value) {
    return value;
}
echo1(true);
function echo2(value) {
    return value;
}
echo2(33);
function echo3(value) {
    return value;
}
echo3({ name: "fsdjsd" });
function echo4(value) {
    return value;
}
echo4({ name: "jdjjd" });
class Product {
    constructor(title) {
        this.title = title;
    }
}
class Egg extends Product {
}
function echo5(value) {
    return value;
}
echo5(new Egg("skdck"));
