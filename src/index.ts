//exercise 1
//Define a class called Logger that takes the name of a file in its constructor and provides
// a method for writing messages to that file. Don’t worry about the actual file I/O
// operations. Just define the class with the right members.

class Logger {
  constructor(public fileName: string) {}

  log(message: string) {}
}

//exercise 2
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//exercise 3
//Create a new class called Employee that extends Person and adds a new property
// called salary.
class Employee extends Person {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

//exercise 4
// Given the data below, define an interface for representing employees:
// let employee = {
// name: 'John Smith',
// salary: 50_000,
// address: {
// street: 'Flinders st',
// city: 'Melbourne',
// zipCode: 3144,
// },
// };

interface Address {
  street: string;
  city: string;
  zipCode: number;
}
interface Employee {
  name: string;
  salary: number;
  address: Address;
}
