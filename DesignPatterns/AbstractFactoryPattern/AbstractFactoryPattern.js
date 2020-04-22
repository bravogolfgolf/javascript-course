class Vehicle {

    constructor(vehicleType, make, model) {
        
        this.vehicleType = vehicleType;
        this.make = make;
        this.model = model;
    }

    printDetails() {
        console.log("Vehicle Type: ", this.vehicleType, 
                    "Make: ", this.make, 
                    "Model: ", this.model);
    }

    drive() {
        console("Drive: ", this.vehicleType, this.make, this.model);
    }

    fillFuel() {
        console("Fill fuel: ", this.vehicleType, this.make, this.model);
    }
};

class Car extends Vehicle {

    constructor(details) {

        super("car", details.make, details.model);

        this.carType = details.carType;
    }

    printDetails() {
        console.log("***** printDetails")

        super.printDetails();
        console.log("Car type: ", this.carType);

        console.log("*****")
    }
};

class Truck extends Vehicle {

    constructor(details) {

        super("truck", details.make, details.model);

        this.truckType = details.truckType;
    }

    printDetails() {
        console.log("***** printDetails")

        super.printDetails();
        console.log("Truck type: ", this.truckType);

        console.log("*****")
    }
};

class TwoWheeler extends Vehicle {

    constructor(details) {

        super("twowheeler", details.make, details.model);

        this.twoWheelerType = details.twoWheelerType;
    }

    printDetails() {
        console.log("***** printDetails")

        super.printDetails();
        console.log("Two-wheeler type: ", this.twoWheelerType);

        console.log("*****")
    }
};

class VehicleFactory {

    constructor(vehicleType) {

        this.vehicleCtor = Car;

        switch (vehicleType) {
            case "car":
                this.vehicleCtor = Car;
                break;
            case "truck":
                this.vehicleCtor = Truck;
                break;
            case "twowheeler":
                this.vehicleCtor = TwoWheeler;
                break;
        }
    }

    create(details) {
        return new this.vehicleCtor(details);
    }
};        

class CarFactory extends VehicleFactory {

    constructor() {
        super("car");
    }
};

class TruckFactory extends VehicleFactory {
    constructor() {
        super("truck");
    }
};

class TwoWheelerFactory extends VehicleFactory {
    constructor() {
        super("twowheeler");
    }
};