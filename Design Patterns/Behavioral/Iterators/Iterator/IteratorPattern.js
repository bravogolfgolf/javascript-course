class Iterator {
    index = 0;
    items = [];

    reset() {
        this.index = 0;
    }

    hasNext() {
        return this.index < this.items.length;
    }

    next() {
        if (!this.hasNext()) {
            throw Error("No more items");
        }
        let currentItem = this.items[this.index];
        this.index++;
        return currentItem;
    }

    first() {
        this.reset();
        return this.next();
    }

    each(callbackFn) {
        let item;
        for (item = this.first(); this.hasNext(); item = this.next()) {
            callbackFn(item);
        }
        callbackFn(item);
    }
}

class Students extends Iterator {

    constructor() {
        super();
        this.index = 0;
        this.items = [];
    }

    addStudent(name) {
        this.items.push(name);
    }
}

const students = new Students();

console.log(students);

students.addStudent("Elise");
students.addStudent("Fiona");
students.addStudent("Harold");
students.addStudent("Jeremy");
students.addStudent("Kim");

console.log(students.first());

console.log("Has next?", students.hasNext());
console.log(students.next());

console.log("Has next?", students.hasNext());
console.log(students.next());

console.log("Has next?", students.hasNext());
console.log(students.next());

console.log("Has next?", students.hasNext());
console.log(students.next());

console.log("Reset", students.reset());

console.log(students.next());
console.log(students.next());
console.log(students.next());
console.log(students.next());
console.log(students.next());

students.each(function (name) {
    console.log("***in each", name);
});

class Cities extends Iterator {

    constructor() {
        super();
        this.index = 0;
        this.items = ["New York", "Boston", "San Diego", "San Francisco",
            "Austin"];
    }
}

const cities = new Cities();

console.log(cities.next());
console.log(cities.next());

cities.each(function (name) {
    console.log("***in each", name);
});