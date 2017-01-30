{
    var simpleNumbers = function (config) {

        (!(config) || (config.constructor !== Object) ? config = {
            type: 'even',
            stride: 1,
            maximumNumber: 10
        } : config);

        this.producedNumbers = [];

        this.numberGenerator = function (...n) {
            ((arguments[0] && typeof arguments[0] == 'number') ? config.maximumNumber = arguments[0] : config.maximumNumber);
            (!(config.maximumNumber) ? config.maximumNumber = 10 : config.maximumNumber);
            (!(config.stride) ? config.stride = 1 : config.stride);
            for (let i = 0; i <= config.maximumNumber; i += config.stride) {
                this.producedNumbers.push(i);
            }
            return this;
        };

        this.getNumbers = function (max) {
            if (this.producedNumbers.length < 1) this.numberGenerator(max);
            var result = this.producedNumbers;
            return result;
        };

        this.prOdEv = function (...n) {

            ((arguments[0]) ? config.type = arguments[0] : (config.type && !(arguments[0])) ? config.type : 'even');

            if (!config.type && !arguments[0]) config.type = 'even';

            var numType = ['even', 'odd', 'prime'];

            if (numType.indexOf(config.type) != -1) {
                if (config.type == 'odd') {
                    return this.producedNumbers.filter((a) => {
                        return ((a & 1) ? a : !1);
                    });
                }

                if (config.type == 'even') {
                    return this.producedNumbers.filter((a) => {
                        return (!(a & 1) ? a : !1);
                    });
                }

                if (config.type == 'prime') {
                    var primes = [];
                    var check = [],
                        i, j;
                    for (i = 2; i <= config.maximumNumber; ++i) {
                        if (!check[i]) {
                            primes.push(i);
                            for (j = i << 1; j <= config.maximumNumber; j += i) {
                                check[j] = true;
                            }
                        }
                    }
                    return primes;
                }

            } else {
                console.error('Please enter a valid parameter');
                return false;
            }
        };


        this.calculate = function () {
            return Array.prototype.pop.apply(configuments)
                .apply(null, configuments);
        };

        this.sum = function (...n) {
            var argumentsToArray = Array.prototype.slice.call(arguments);
            return [].reduce.call(this.producedNumbers.concat(argumentsToArray), (a, b) => {
                return a + b;
            });
        };

        this.diff = function (...n) {
            var argumentsToArray = Array.prototype.slice.call(arguments);
            //configs = Array.from(arguments);
            return [].reduce.call(this.producedNumbers.concat(argumentsToArray), (a, b) => {
                return a - b;
            });
        };
    };
}