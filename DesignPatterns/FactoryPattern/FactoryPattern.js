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


var vehicleFactory = new VehicleFactory();

console.log("Vehicle factory: ", vehicleFactory);


var carDetails = {
    "make": "Honda",
    "model": "Civic",
    "carType": "sedan"
}

var car = vehicleFactory.createVehicle("car", carDetails);

console.log("Created car: ", car);
console.log("Is instanceof Car?: ", (car instanceof Car));


car.printDetails();


var truckDetails = {
    "make": "Ashok Leyland",
    "model": "D20B",
    "truckType": "flatbed"
}

var truck = vehicleFactory.createVehicle("truck", truckDetails);

console.log("Created truck: ", truck);
console.log("Is instanceof Truck?: ", (truck instanceof Truck));

truck.printDetails();