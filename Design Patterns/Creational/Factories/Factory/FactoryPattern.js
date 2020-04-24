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



class VehicleFactory {

    createVehicle(vehicleType, details) {

        var vehicleCtor = Car;
        if (vehicleType == "car") {
            vehicleCtor = Car;
        } else if (vehicleType == "truck") {
            vehicleCtor = Truck;
        }

        return new vehicleCtor(details);

    }
}

class CustomVehicleFactory {

    constructor(vehicleType) {
        if (vehicleType == "car") {
            this.vehicleCtor = Car;
        } else if (vehicleType == "truck") {
            this.vehicleCtor = Truck;
        }
    }

    createVehicle(details) {

        return new this.vehicleCtor(details);

    }
}


var carFactory = new CustomVehicleFactory("car");

var truckFactory = new CustomVehicleFactory("truck");

console.log("Car factory: ", carFactory);
console.log("Truck factory: ", truckFactory);


var carDetails = {
    "make": "BMW",
    "model": "5 series",
    "carType": "convertible"
}

var car = carFactory.createVehicle(carDetails);

console.log("Created car: ", car);
console.log("Is instanceof Car?: ", (car instanceof Car));

car.printDetails();


var truckDetails = {
    "make": "Western Star",
    "model": "A1",
    "truckType": "lowboy trailer"
}

var truck = truckFactory.createVehicle(truckDetails);

console.log("Created truck: ", truck);
console.log("Is instanceof Truck?: ", (truck instanceof Truck));

truck.printDetails();
