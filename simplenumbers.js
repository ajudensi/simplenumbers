'use strict'; {
  var SimpleNumbers = function(config) {

    (!(config) || (config.constructor !== Object) ? config = {
      type: 'even',
      stride: 1,
      maximumNumber: 0
    } : config);

    var producedNumbers = [];

    this.numberGenerator = function(...n) {
      producedNumbers = []; //reset variable to empty. Remove all variables
      var max = 0;
      var stride = 1;
      var start = arguments[1] || false;
      ((typeof arguments[0] == 'number') ? max = arguments[0] : (!(config.maximumNumber) ? max = max : max = config.maximumNumber));
      ((start === true) ? start = 1 : start = 0);
      ((typeof arguments[2] == 'number') ? stride = arguments[2] : (!(config.stride) ? stride = stride : stride = config.stride));
      for (let i = start; i <= max; i += stride) {
        producedNumbers.push(i);
      }
      return this;

    };

    this.getNumbers = function(max, start = false) {
      producedNumbers = []; //reset variable to empty. Remove all variables
      this.numberGenerator(max, start);
      var result = producedNumbers;
      return result;
    };

    this.produceNumberType = function(...n) {

      ((arguments[0]) ? config.type = arguments[0] : (config.type && !(arguments[0])) ? config.type : 'even');

      if (!config.type && !arguments[0]) config.type = 'even';

      var numType = ['even', 'odd', 'prime'];

      if (numType.indexOf(config.type) != -1) {
        if (config.type == 'odd') {
          return producedNumbers.filter((a) => {
            return ((a & 1) ? a : !1);
          });
        }

        if (config.type == 'even') {
          return producedNumbers.filter((a) => {
            return (!(a & 1) ? a : !1);
          });
        }

        if (config.type == 'prime') {
          //console.log('its prime');
          var primes = [];
          var check = [],
            i, j;

          for (i = 2; i <= producedNumbers[producedNumbers.length - 1]; ++i) {
            if (!check[i]) {
              primes.push(i);
              for (j = i << 1; j <= producedNumbers[producedNumbers.length - 1]; j += i) {
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


    this.calculate = function() {
      return Array.prototype.pop.apply(arguments)
        .apply(null, arguments);
    };

    this.sum = function(...n) {
      var argumentsToArray = Array.prototype.slice.call(arguments);
      return argumentsToArray.concat(producedNumbers)
        .reduce((a, b) => {
          return a + b;
        });
    };

    this.diff = function(...n) {
      var argumentsToArray = Array.prototype.slice.call(arguments);
      //argumentsToArray = Array.from(arguments);
      return argumentsToArray.concat(producedNumbers)
        .reduce((a, b) => {
          return a - b;
        });
    };
  };
}

module.exports = SimpleNumbers;