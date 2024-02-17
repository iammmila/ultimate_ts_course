function wrapInArray<T>(value: T) {
  return [value];
}
let members = wrapInArray(1);

//also we can write this in a class:
class ArrayUtils {
  wrapInArray2<T>(value: T) {
    return [value];
  }
}

let utils = new ArrayUtils();
let members2 = utils.wrapInArray2(1);

//and if we write static methods:
class ArrayUtils2 {
  static wrapInArray2<T>(value: T) {
    return [value];
  }
}

let numbers = ArrayUtils2.wrapInArray2(1);
