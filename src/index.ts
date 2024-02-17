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

class Teacher extends Person {
  //after changing in the tsconfig file, override is checked.
  override get fullName(): string {
    return "Professor " + super.fullName;
  }
}

let student1 = new Student(1, "Mila", "Ibrahimova");
let teacher1 = new Teacher("Malahat", "brhm");
console.log(teacher1.fullName);
