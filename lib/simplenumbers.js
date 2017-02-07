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

		this.numberGenerator = function (max, start, stride) {
			producedNumbers = []; //reset variable to empty. Remove all variables
			max = parseInt(max) || parseInt(config.maximumNumber);
			stride = parseInt(stride) || parseInt(config.stride) || 1;
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
		
		this.fibo = function(typeConfig){
			typeConfig = (!(typeConfig) || (typeConfig.constructor !== Object) ? {
				start: 1,
				asMax: false
			} : typeConfig);
			let fibo = [typeConfig.start];
			for (let i = typeConfig.start; i < producedNumbers[producedNumbers.length - 1]; i++) {
				if ((typeConfig.asMax === true) && (fibo[fibo.length - 1] > producedNumbers[producedNumbers.length - 1])) {
					fibo.pop();
					break;
				}
				if(fibo.length < 2) { fibo.push(i) } else { fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])}
			}
			return fibo;
		};
		
		this.factorial = function(){
		  function factorial(n){
  				if (n === 0) {
  					return 1;
  				} else {
  					return factorial(n - 1) * n;
  				}
		  }
		  return factorial(producedNumbers[producedNumbers.length - 1]);
		};
		
		this.even = function(){
		  return producedNumbers.filter((a) => {
				return (!(a & 1) ? a : !1);
			});
		};
		
		this.odd = function(){
		  return producedNumbers.filter((a) => {
				return ((a & 1) ? a : !1);
			});
		};
		
		this.prime = function(){
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
		};


		this.calculate = function () {
		  var type = Array.prototype.pop.call(arguments);
		  var argumentsToArray;
		  if(arguments[0].constructor !== Array){
  			argumentsToArray = Array.prototype.slice.call(arguments);
		  } else {
		    argumentsToArray = arguments[0];
		  }
		  
			return argumentsToArray.concat(producedNumbers).reduce((a, b) => {
			  if(type === 'sum'){
			    return a + b;
			  } else if(type === 'diff') {
			   return  a - b;
			 }
			});
		};
	};
	return SimpleNumbers;
}());
module.exports = SimpleNumbers;