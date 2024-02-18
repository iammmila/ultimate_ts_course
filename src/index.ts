function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // const original = descriptor.value //it is not working for getters and setters; it is working for only regular methods;
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this); //optional chaining - because of original can be undefined
    // original!.call(this); //exclamation mark - because we say: hey i know it is not gonna be undefined or null;
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}
  @Capitalize
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("mila", "ibrahimova");
console.log(person.fullName);
