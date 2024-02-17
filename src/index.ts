class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
    //if we write private, we canot call anywhere in the outside
    // but if we write protected, we can call in child class.
  protected walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public StudentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    this.walk();
    console.log("tkaing test");
  }
}

class Teacher extends Person {
  //after changing in the tsconfig file, override is checked.
  override get fullName(): string {
    return "Professor " + super.fullName;
  }
}
class Principal extends Person {
  //after changing in the tsconfig file, override is checked.
  override get fullName(): string {
    return "Principal " + super.fullName;
  }
}

printNames([
  new Student(1, "mina", "ibrh"),
  new Teacher("mila", "brhm"),
  new Principal("mosh", "nago"),
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
