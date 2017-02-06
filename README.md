# simplenumbers.js 

[![npm version](https://badge.fury.io/js/simplenumbers.svg)](https://badge.fury.io/js/simplenumbers)  

The idea is simple - reduce stress of working with numbers

```javascript
npm install simplenumbers
```

### Methods

* **numberGenerator()**  Returns an array of generated integers. Accepts two argument, `maximumNumber` (endlimit), and a `stride`. Used for method chaining with other methods.
* **getNumbers()** Returns an array of generated integers.Accepts as `maximumNumber`. Used independently.
* **produceNumberType()** Accepts a single string argument `prime`, `odd`, `even`
* **sum()** Sum its arguments or return values from `numberGenerator()`. Accepts integer arguments and returns single integer.
* **diff()** Finds difference of arguments or return values from numberGenerator(). Accepts integer arguments and returns single integer.

### Relevant information
* First, initialize the libary, by creating an object of `javascript SimpleNumbers()`.
* `SimpleNumbers()` accepts an object argument with three optional arguments:
* `maximumNumber` this is meant to be the maximum value used by `numberGenerator()` and `getNumbers()`. Defaults to 0.
* `stride` used by `numberGenerator()` to produce an array of integers in steps. Defaults to 1.
* `type` accepts a string value of either: `prime`, `odd`, `even`.


```javascript
var sN = new SimpleNumbers({
  maximumNumber: , //optional integer defaults to 10
  stride: '', //optional string default to 1
  type: 'prime' //optionalstring defaults to even
});
```

### Usage
```javascript
console.log(sN.numberGenerator(10).produceNumberType('fibo', {start: 1, asMax: true}));//asMax=true sets 10 as maximum value in fibo sequence otherwise runs through start to 10 /** result will be [ 1, 1, 2, 3, 5, 8 ] */
console.log(sN.numberGenerator(10).produceNumberType('fibo', {start: 1, asMax: false}));//asMax=false generates fibo from start to 10 /** result will be [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ] */
console.log(sN.numberGenerator(100).produceNumberType('fact'));//9.33262154439441e+157
console.log(sN.numberGenerator(15).produceNumberType('prime')); //[ 2, 3, 5, 7, 11, 13 ]
console.log(sN.numberGenerator(15).produceNumberType('even')); //[ 2, 4, 6, 8, 10, 12, 14 ]
console.log(sN.numberGenerator(15).produceNumberType('odd')); //[ 1, 3, 5, 7, 9, 11, 13, 15
console.log(sN.getNumbers(15)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
console.log(sN.getNumbers(5, true)); //starts from 1 with true specified
console.log(sN.getNumbers(15, true, 3)); //starts from 1 with true specified and stride by 3
console.log(sN.numberGenerator().diff(5,1,2)); //2
console.log(sN.numberGenerator().sum(2,5)); //7
```
### Note
Method parameters overwrite class config values
###### Example:
```javascript
sN = new SimpleNumbers({
  type: 'prime' //optional
});
console.log(sN.numberGenerator().produceNumberType('odd')) //returns 1,3,5,7,9
```


### Instantiating multiple objects

```javascript
var sN1 = new SimpleNumbers();

var sN2 = new SimpleNumbers();

var sN3 = new SimpleNumbers({
  maximumNumber: 100 , 
  stride: '2', 
  type: 'prime' 
});
```
## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

#THANK YOU