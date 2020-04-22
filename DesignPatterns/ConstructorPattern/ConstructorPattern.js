function Student(name, university) {

    this.name = name;
    this.university = university;

    this.printDetails = function() {
        console.log("***** printDetails");
        console.log("Name: ", this.name,
            "University: ", this.university,
            "GPA: ", this.gpa);
        console.log("*****");
    }
}

var student_1 = new Student("Nora", "Pinnacle University");

console.log("student_1: ", student_1);

student_1.printDetails();

// TODO recording: Show on console, expand object, and show the new printDetails output

student_1.gpa = 3.7;

console.log("student_1 with gpa: ", student_1);

student_1.printDetails();


Student.prototype.showDetails = function() {
    console.log("***** showDetails");
    console.log("Name: ", this.name,
        "University: ", this.university,
        "GPA: ", this.gpa);
    console.log("*****");
};


student_1.showDetails();


var student_2 = new Student("Damien", "Science University");
student_2.gpa = 3.2;

console.log("student_2 with gpa: ", student_2);

student_2.printDetails();

student_2.showDetails();