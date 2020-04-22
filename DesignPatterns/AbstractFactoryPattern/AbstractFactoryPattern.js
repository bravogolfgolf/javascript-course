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

var abstractVehicleFactory = (function () {

  var factoryTypes = {};

  return {

    getVehicle: function(vehicleType, details) {

        var vehicleFactory = factoryTypes[vehicleType];

        if (vehicleFactory) {
            return vehicleFactory.create(details);
        }

        return null;
    },

    registerVehicleFactory: function(vehicleType, vehicleFactory) {

        if (!vehicleFactory.__proto__.create) {
            throw Error("create() method expected on the factory");
        }

        if (!vehicleFactory.vehicleCtor) {
            throw Error("vehicleCtor expected on the factory");
        }

        if (!vehicleFactory.vehicleCtor.prototype.drive ||
            !vehicleFactory.vehicleCtor.prototype.fillFuel) {
            throw Error("Vehicles constructed should have drive() and fillFuel() methods");
        }

        factoryTypes[vehicleType] = vehicleFactory;
    }

   };
})();

abstractVehicleFactory.registerVehicleFactory("car", new CarFactory());

abstractVehicleFactory.registerVehicleFactory("truck", new TruckFactory());

console.log("abstractVehicleFactory: ", abstractVehicleFactory);

var carDetails = {
    "make": "BMW",
    "model": "5 series",
    "carType": "convertible"
}

var car = abstractVehicleFactory.getVehicle("car", carDetails);

console.log("Created car: ", car);
console.log("Is instanceof Car?: ", (car instanceof Car));

car.printDetails();

var truckDetails = {
    "make": "Western Star",
    "model": "A1",
    "truckType": "lowboy trailer"
}

var truck = abstractVehicleFactory.getVehicle("truck", truckDetails);

console.log("Created truck: ", truck);
console.log("Is instanceof Truck?: ", (truck instanceof Truck));

truck.printDetails();

var twoWheelerDetails = {
    "make": "Hero",
    "model": "Z23",
    "twoWheelerType": "motorbike"
}

var twowheeler = abstractVehicleFactory.getVehicle("twowheeler", twoWheelerDetails);

console.log("Created two-wheeler: ", twowheeler);
console.log("Is instanceof TwoWheeler?: ", (twowheeler instanceof TwoWheeler));

abstractVehicleFactory.registerVehicleFactory("twowheeler", new TwoWheelerFactory());

twowheeler = abstractVehicleFactory.getVehicle("twowheeler", twoWheelerDetails);

console.log("Created two-wheeler after registering factory: ", twowheeler);
console.log("Is instanceof TwoWheeler?: ", (twowheeler instanceof TwoWheeler));

twowheeler.printDetails();
