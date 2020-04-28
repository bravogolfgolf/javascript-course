var gradeFactory = (function () {

    class Grade {

        constructor(letterGrade) {

            var message;
            
            if (letterGrade == "A") {
                message = "Excellent!";
            } else if (letterGrade == "B") {
                message = "Very good";
            } else if (letterGrade == "C") {
                message = "Not bad";
            } else if (letterGrade == "D") {
                message = "Needs a lot of improvement";
            } else {
                message = "Not living up to your potential";
            }

            this.letterGrade = letterGrade;
            this.message = message;
            this.randomNumber = Math.random();
        }
    }    

    var gradeMapping = {}

    return {

        getGrade: function(score) {

            var letterGrade;

            if (score >= 90) {
                letterGrade = "A";
            } else if (score >= 75) {
                letterGrade = "B";
            } else if (score >= 60) {
                letterGrade = "C";
            } else if (score >= 40) {
                letterGrade = "D";
            } else {
                letterGrade = "F";
            }

            if (!gradeMapping[letterGrade]) {
                gradeMapping[letterGrade] = new Grade(letterGrade);
            }

            return gradeMapping[letterGrade];
        }
    }     

})();

class Student {

    constructor(name, score) {

        this.name = name;
        this.score = score;

        this.grade = gradeFactory.getGrade(score);
    }
}

var studentNames = ["Anita", "Bella", "Charles", "Dora", "Emily", "Fiona", "Gerald"];
var studentScores = [10, 99, 91, 78, 45, 41, 50];

var studentList = [];

for (var i = 0; i < 7; i++) {

    studentList.push(new Student(studentNames[i], studentScores[i]));
}

console.log(studentList);































