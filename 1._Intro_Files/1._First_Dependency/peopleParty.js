const faker = require("faker");
const Student = require("../Student.js");

console.log("message: ", Student);

let students = [];

for (let i = 0; i < 10; i++) {
    const student = new Student(faker.name.firstName() + " " + faker.name.lastName());
}

console.log(students);
