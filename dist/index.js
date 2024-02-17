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
let student1 = new Student(1, "Mila", "Ibrahimova");
console.log(student1);
console.log(student1.fullName);
