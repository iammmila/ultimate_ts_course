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
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
printNames([
    new Student(1, "mina", "ibrh"),
    new Teacher("mila", "brhm"),
    new Principal("mosh", "nago"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
