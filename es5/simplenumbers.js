'use strict';

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

var SimpleNumbers = function () {

	var SimpleNumbers = function SimpleNumbers(config) {

		var producedNumbers = [];

		!config || config.constructor !== Object ? config = {
			type: 'even',
			stride: 1,
			maximumNumber: -1
		} : config;

		if (!config.stride) {
			config.stride = 1;
		}
		if (!config.maximumNumber) {
			config.maximumNumber = -1;
		}

		this.numberGenerator = function (max, start, stride) {
			producedNumbers = []; //reset variable to empty. Remove all variables
			max = typeof max === 'number' ? max : typeof config.maximumNumber === 'number' ? config.maximumNumber : max;
			stride = typeof stride === 'number' ? stride : typeof config.stride !== 'number' ? 1 : config.stride;
			start = start === true ? 1 : 0;
			for (var i = start; i <= max; i += stride) {
				producedNumbers.push(i);
			}
			return this;
		};

		this.getNumbers = function (max, start, stride) {
			start = start || false;
			producedNumbers = []; //reset variable to empty. Remove all variables
			this.numberGenerator(max, start, stride);
			var result = producedNumbers;
			return result;
		};

		this.produceNumberType = function (type, typeConfig) {

			type ? config.type = type : config.type && !type ? config.type : 'even';

			!typeConfig || typeConfig.constructor !== Object ? typeConfig = {
				start: 1,
				asMax: false
			} : typeConfig;

			if (!config.type && !type) config.type = 'even';

			var numType = ['even', 'odd', 'prime', 'fact', 'fibo'];

			if (numType.indexOf(config.type) !== -1) {
				if (config.type === 'odd') {
					return producedNumbers.filter(function (a) {
						return a & 1 ? a : !1;
					});
				}

				if (config.type === 'even') {
					return producedNumbers.filter(function (a) {
						return !(a & 1) ? a : !1;
					});
				}

				if (config.type === 'prime') {
					var primes = [];
					var check = [],
					    i,
					    j;

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

				if (config.type === 'fact') {
					var _ret = function () {
						var factorial = function factorial(n) {
							if (n === 0) {
								return 1;
							} else {
								return factorial(n - 1) * n;
							}
						};
						return {
							v: factorial(producedNumbers[producedNumbers.length - 1])
						};
					}();

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === 'object') return _ret.v;
				}

				if (config.type === 'fibo') {
					var doFibo = function doFibo(n) {
						var fibo = [typeConfig.start];
						for (var _i = typeConfig.start; _i < n; _i++) {
							if (typeConfig.asMax === true && fibo[fibo.length - 1] > n) {
								fibo.pop();
								break;
							}
							fibo.length < 2 ? fibo.push(_i) : fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
						}
						return fibo;
					};
					return doFibo(producedNumbers[producedNumbers.length - 1]);
				}
			} else {
				return false;
			}
		};

		this.calculate = function () {
			return Array.prototype.pop.apply(arguments).apply(null, arguments);
		};

		this.sum = function () {
			var argumentsToArray = Array.prototype.slice.call(arguments);
			return argumentsToArray.concat(producedNumbers).reduce(function (a, b) {
				return a + b;
			});
		};

		this.diff = function () {
			var argumentsToArray = Array.prototype.slice.call(arguments);
			return argumentsToArray.concat(producedNumbers).reduce(function (a, b) {
				return a - b;
			});
		};
	};
	return SimpleNumbers;
}();
module.exports = SimpleNumbers;
