"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(StudentId, firstName, lastName) {
        super(firstName, lastName);
        this.StudentId = StudentId;
    }
    takeTest() {
        console.log("tkaing test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let student1 = new Student(1, "Mila", "Ibrahimova");
let teacher1 = new Teacher("Malahat", "brhm");
console.log(teacher1.fullName);
