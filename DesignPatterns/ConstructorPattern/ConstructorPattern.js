class StudentClass {

    constructor(name, university, gpa) {

        this.name = name;
        this.university = university;
        this.gpa = gpa;

        this.printDetails = function() {
            console.log("***** printDetails");
            console.log("Name: ", this.name,
                "University: ", this.university,
                "GPA: ", this.gpa);
            console.log("*****");
        }

    }

    showDetails() {
        console.log("***** showDetails");
        console.log("Name: ", this.name,
            "University: ", this.university,
            "GPA: ", this.gpa);
        console.log("*****");
    }

}


var student_10 = new StudentClass("Robert", "Professional University", 3.9);

console.log("student_10 : ", student_10);

student_10.printDetails();

student_10.showDetails();
