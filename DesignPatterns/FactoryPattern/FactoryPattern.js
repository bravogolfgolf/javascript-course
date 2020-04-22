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