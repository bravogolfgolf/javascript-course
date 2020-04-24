let randomCounterModule = (function () {

    let randomCounter = 0;

    function getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }

    function logCounterValue(message) {
        console.log(message, randomCounter);
    }

    return {

        getCounter: function () {
            return randomCounter;
        },

        incrementCounter: function () {
            randomCounter = randomCounter + getRandomNumber();

            logCounterValue("Counter after increment: ");
        },

        decrementCounter: function () {
            randomCounter = randomCounter - getRandomNumber();

            logCounterValue("Counter after decrement: ");
        },

        randomlyIncrementOrDecrement: function () {
            let number = getRandomNumber();

            if (number % 2 === 0) {
                this.incrementCounter();
            } else {
                this.decrementCounter();
            }
        },

        resetCounter: function () {
            logCounterValue("Last counter value: ");
            randomCounter = 0;

            logCounterValue("Counter after reset: ");
        }
    };
})();


console.log("Random counter module: ", randomCounterModule);


randomCounterModule.incrementCounter();

randomCounterModule.incrementCounter();

randomCounterModule.decrementCounter();

randomCounterModule.incrementCounter();

randomCounterModule.decrementCounter();


randomCounterModule.resetCounter();

randomCounterModule.decrementCounter();

randomCounterModule.incrementCounter();


randomCounterModule.resetCounter();

randomCounterModule.randomlyIncrementOrDecrement();

randomCounterModule.randomlyIncrementOrDecrement();

randomCounterModule.randomlyIncrementOrDecrement();

randomCounterModule.randomlyIncrementOrDecrement();
