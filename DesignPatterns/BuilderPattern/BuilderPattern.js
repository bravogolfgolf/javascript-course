class Vehicle {

    constructor(vehicleType) {
        this.vehicleType = vehicleType;
    }

    printDetails() {
        console.log("Vehicle Type: ", this.vehicleType,
            "Make: ", this.make,
            "Model: ", this.model);
    }

    drive() {
        console.log("Drive: ", this.vehicleType, this.make, this.model);
    }

    fillFuel() {
        console.log("Fill fuel: ", this.vehicleType, this.make, this.model);
    }
}

class Car extends Vehicle {

    constructor() {
        super("car");
    }
}

class Truck extends Vehicle {

    constructor() {
        super("truck");
    }
}

class TwoWheeler extends Vehicle {

    constructor() {
        super("twowheeler");
    }
}

let vehicleBuilder = (function () {

    let vehicleInstance = null;

    return {

        create: function (vehicleType) {

            switch (vehicleType) {
                case "car":
                    vehicleInstance = new Car();
                    break;
                case "truck":
                    vehicleInstance = new Truck();
                    break;
                case "twowheeler":
                    vehicleInstance = new TwoWheeler();
                    break;
            }

            return this;
        },

        make: function (make) {
            vehicleInstance.make = make;
            return this;
        },

        model: function (model) {
            vehicleInstance.model = model;
            return this;
        },

        color: function (color) {
            vehicleInstance.color = color;
            return this;
        },

        wheels: function (wheels) {
            vehicleInstance.wheels = wheels;
            return this;
        },

        build: function () {
            if (!vehicleInstance.make || !vehicleInstance.model) {
                throw Error('Please specify make and model of the vehicle');
            }

            return vehicleInstance;
        }
    };
})();

console.log("Vehicle builder: ", vehicleBuilder);

car = vehicleBuilder.create("car")
    .make("Honda")
    .model("Civic")
    .wheels("Alloy")
    .color("red")
    .build();

console.log("Car: ", car);
car.drive();
car.fillFuel();

let truck = vehicleBuilder.create("truck")
    .make("Ashok Leyland")
    .model("C204")
    .wheels("Forged")
    .build();

console.log("Truck: ", truck);

let bike = vehicleBuilder.create("twowheeler")
    .make("Bajaj")
    .model("Zoom")
    .color("black")
    .build();

console.log("Bike: ", bike);
