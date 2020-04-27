function Car(make, model, totalCost) {

    this.make = make;
    this.model = model;

    let customFeatures = [];

    this.getTotalCost = function () {
        return totalCost;
    }

    this.getCustomFeatures = function () {
        return customFeatures;
    }

    this.printDetails = function () {
        console.log("Make:", this.make,
            "Model:", this.model,
            "Custom features:", this.getCustomFeatures(),
            "Total cost:", this.getTotalCost());
    }
}

function customColor(car, color, cost) {

    let customFeatures = car.getCustomFeatures();
    let totalCost = car.getTotalCost();

    customFeatures.push("color " + color);

    car.getCustomFeatures = function () {
        return customFeatures.concat();
    }

    car.getTotalCost = function () {
        return totalCost + cost;
    }

    return car;
}

function alloyWheels(car) {

    let customFeatures = car.getCustomFeatures();
    let totalCost = car.getTotalCost();

    customFeatures.push("alloy wheels");

    car.getCustomFeatures = function () {
        return customFeatures.concat();
    }

    car.getTotalCost = function () {
        return totalCost + 400;
    }

    return car;
}

function leatherSeats(car) {

    let customFeatures = car.getCustomFeatures();
    let totalCost = car.getTotalCost();

    customFeatures.push("leather seats");

    car.getCustomFeatures = function () {
        return customFeatures.concat();
    }

    car.getTotalCost = function () {
        return totalCost + 350;
    }

    return car;
}

function musicSystem(car) {

    let customFeatures = car.getCustomFeatures();
    let totalCost = car.getTotalCost();

    customFeatures.push("music system");

    car.getCustomFeatures = function () {
        return customFeatures.concat();
    }

    car.getTotalCost = function () {
        return totalCost + 150;
    }

    return car;
}

let plainCar = new Car("Toyota", "Camry", 12000);
console.log("Plain car: ", plainCar);
plainCar.printDetails();

let customizedCar = customColor(plainCar, "red", 200)
console.log("Customized car: ", customizedCar);
customizedCar.printDetails();

customizedCar = alloyWheels(customizedCar)
console.log("Customized car: ", customizedCar);
customizedCar.printDetails();

customizedCar = leatherSeats(customizedCar)
console.log("Customized car: ", customizedCar);
customizedCar.printDetails();

customizedCar = musicSystem(customizedCar)
console.log("Customized car: ", customizedCar);
customizedCar.printDetails();

let anotherCustomizedCar = alloyWheels(leatherSeats(customColor(
    new Car("Honda", "Civic", 15000), "gold", 600)));
console.log("Another customized car: ", anotherCustomizedCar);
anotherCustomizedCar.printDetails();