const singletonLogger = (function () {

    let instance;

    class Logger {

        constructor() {
            this.randomNumber = Math.random();
        }

        log(message) {
            console.log("Logger id: ", this.randomNumber, message);
        }
    }

    return {

        getInstance: function () {

            if (!instance) {
                instance = new Logger();
            }

            return instance;
        }

    };

})();

const logger1 = singletonLogger.getInstance();

logger1.log("Finally we have a singleton");

logger1.log("How do we confirm this?");


const logger2 = singletonLogger.getInstance();

logger2.log("The random number is the same and we cannot directly instantiate the logger!");
