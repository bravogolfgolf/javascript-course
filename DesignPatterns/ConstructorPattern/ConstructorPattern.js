var another_student = Object.create(Object.prototype);

another_student.name = "James";
another_student.university = "Intelligent University";
another_student["gpa"] = 3.4;

another_student.printDetails = function() {
    console.log("***** printDetails");
    console.log("Name: ", this.name,
        "University: ", this["university"],
        "GPA: ", this.gpa);
    console.log("*****");
}


console.log("another_student object with properties: ", another_student);

another_student.printDetails();

var yet_another_student = new Object();

yet_another_student.name = "Nancy";
yet_another_student.university = "Pinnacle University";
yet_another_student.gpa = 3.3;

yet_another_student.printDetails = function() {
    console.log("***** printDetails")
    console.log("Name: ", this.name,
        "University: ", this.university,
        "GPA: ", this.gpa);
    console.log("*****")
}

console.log("yet_another_student object with properties: ", yet_another_student);

yet_another_student.printDetails();
