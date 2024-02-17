class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public StudentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("tkaing test");
  }
}

let student1 = new Student(1, "Mila", "Ibrahimova");
console.log(student1);
console.log(student1.fullName);
