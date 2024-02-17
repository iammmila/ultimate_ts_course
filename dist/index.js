"use strict";
function wrapInArray(value) {
    return [value];
}
let members = wrapInArray(1);
class ArrayUtils {
    wrapInArray2(value) {
        return [value];
    }
}
let utils = new ArrayUtils();
let members2 = utils.wrapInArray2(1);
class ArrayUtils2 {
    static wrapInArray2(value) {
        return [value];
    }
}
let numbers = ArrayUtils2.wrapInArray2(1);
