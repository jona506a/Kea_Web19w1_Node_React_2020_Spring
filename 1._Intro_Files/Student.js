class Student {
    // fields
    classes = [];
    constructor(name) {
        this.name = name;
        //this.classes = [];
    }
    addClass(studentClass) {
        this.classes.push(studentClass);
    }
}

module.exports = Student;

const student = new Student("Lars");
student.addClass("React+Node");
student.addClass("Django");
//console.log(student.classes);




