var student = {};

console.log("Empty student object: ", student);


student.name = "Alice";
student["university"] = "Amazing University";
student.gpa = 3.8;

console.log("student object with properties: ", student);



student.printDetails = function() {
    console.log("***** printDetails");
    console.log("Name: ", this.name,
        "University: ", this.university,
        "GPA: ", this["gpa"]);
    console.log("*****");
}

console.log("student object with function properties: ", student);


student.printDetails();