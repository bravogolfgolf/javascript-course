var anotherSchoolPrototype = {

    init: function(name, numStudents) {
        this.name = name;
        this.numStudents = numStudents;
    },

    enrollStudent: function(studentName) {
        console.log("Enrolling student: ", studentName, " in ", this.name);
    },

    conductClass: function(className) {
        console.log("Conducting class: ", className, " in ", this.name);
    }

}

function createSchool(name, numStudents) {

    function School() {

    };

    School.prototype = anotherSchoolPrototype;

    var newSchool = new School();

    newSchool.init(name, numStudents);

    return newSchool;
}


var globalSchool = createSchool("Global School", 400);

console.log(globalSchool);

globalSchool.enrollStudent("Damien");

globalSchool.enrollStudent("Fabian");

globalSchool.conductClass("English");
