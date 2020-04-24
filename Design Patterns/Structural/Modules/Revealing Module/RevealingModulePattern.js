let randomCounterModule = (function () {

    let randomCounter = 0;
    let randomNumber = privateGetRandomNumber();

    function privateGetRandomNumber() {
        return Math.floor(Math.random() * 10);
    }

    function privateLogCounterValue(message) {
        console.log(message, randomCounter);
    }

    function publicIncrementCounter() {
        randomCounter = randomCounter + randomNumber;

        privateLogCounterValue("Counter after increment: ");
    }

    function publicDecrementCounter() {
        randomCounter = randomCounter - randomNumber;

        privateLogCounterValue("Counter after decrement: ");
    }

    function publicRandomlyIncrementOrDecrement() {
        let number = privateGetRandomNumber();

        if (number % 2 === 0) {
            publicIncrementCounter();
        } else {
            publicDecrementCounter();
        }
    }


    return {
        randomNumberProperty: randomNumber,
        increment: publicIncrementCounter,
        decrement: publicDecrementCounter,
        randomIncrementOrDecrement: publicRandomlyIncrementOrDecrement
    };

})();


console.log("Random counter module: ", randomCounterModule);


randomCounterModule.increment();

randomCounterModule.increment();

randomCounterModule.decrement();

randomCounterModule.randomIncrementOrDecrement();

console.log("Current increment/decrement value: ", 
    randomCounterModule.randomNumberProperty);


randomCounterModule.randomNumberProperty = 10

console.log("Updated increment/decrement value: ", 
    randomCounterModule.randomNumberProperty);

console.log("Random counter module: ", randomCounterModule);

randomCounterModule.increment();







