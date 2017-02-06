let SimpleNumbers = (function () {

	let SimpleNumbers = function (config) {

		let producedNumbers = [];

		if(!(config) || (config.constructor !== Object) ? config = {
			type: 'even',
			stride: 1,
			maximumNumber: -1
		} : config)

		if (!(config.stride)) {
			config.stride = 1;
		}
		if (!(config.maximumNumber)) {
			config.maximumNumber = -1;
		}
		
		/*eslint complexity: [2, 20]*/
		this.numberGenerator = function (max, start, stride) {
			producedNumbers = []; //reset variable to empty. Remove all variables
			max = ((typeof max === 'number') ? max : ((typeof config.maximumNumber === 'number') ? config.maximumNumber : max));
			stride = ((typeof stride === 'number') ? stride : ((typeof config.stride !== 'number') ? 1 : config.stride));
			start = ((start === true) ? 1 : 0);
			for (let i = start; i <= max; i += stride) {
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
		/*eslint complexity: [2, 20]*/
		this.produceNumberType = function (type, typeConfig) {

			config.type = (type) ? type : (config.type && !(type)) ? config.type : 'even';

			typeConfig = (!(typeConfig) || (typeConfig.constructor !== Object) ? {
				start: 1,
				asMax: false
			} : typeConfig);
			
			console.log(config.type);

			var numType = ['even', 'odd', 'prime', 'fact', 'fibo'];
			
			if (numType.indexOf(config.type) !== -1) {
				if (config.type === 'even') {
				  config.type = '';//reset config.type
					return producedNumbers.filter((a) => {
						return (!(a & 1) ? a : !1);
					});
				}
				
				if (config.type === 'odd') {
				  config.type = '';//reset config.type
					return producedNumbers.filter((a) => {
						return ((a & 1) ? a : !1);
					});
				}

				if (config.type === 'prime') {
				  config.type = '';//reset config.type
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
				if (config.type === 'fact') {
				  config.type = '';//reset config.type
					let factorial = function (n) {
						if (n === 0) {
							return 1;
						} else {
							return factorial(n - 1) * n;
						}
					};
					return factorial(producedNumbers[producedNumbers.length - 1]);
				}

				if (config.type === 'fibo') {
				  config.type = ''; //reset config.type
					let doFibo = function (n) {
						let fibo = [typeConfig.start];
						for (let i = typeConfig.start; i < n; i++) {
							if ((typeConfig.asMax === true) && (fibo[fibo.length - 1] > n)) {
								fibo.pop();
								break;
							}
							if(fibo.length < 2) { fibo.push(i) } else { fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])}
						}
						return fibo;
					};
					return doFibo(producedNumbers[producedNumbers.length - 1]);
				}


			} else {
				return producedNumbers.filter((a) => {
						return (!(a & 1) ? a : !1);
				});
			}
		};


		this.calculate = function () {
			return Array.prototype.pop.apply(arguments).apply(null, arguments);
		};

		this.sum = function () {
			var argumentsToArray = Array.prototype.slice.call(arguments);
			return argumentsToArray.concat(producedNumbers).reduce((a, b) => {
				return a + b;
			});
		};

		this.diff = function () {
			var argumentsToArray = Array.prototype.slice.call(arguments);
			return argumentsToArray.concat(producedNumbers).reduce((a, b) => {
				return a - b;
			});
		};
	};
	return SimpleNumbers;
}());
module.exports = SimpleNumbers;