# simple-numbers-library

A simple numbers library to reduce the stress of working with numbers

### Methods

* **numValues()**  Returns an array of generated integers. Accepts two argument, `values` (endlimit), and a `step`.
* **prOdEv()** Accepts a single string argument `prime`, `odd`, `even`
* **sum()** Sum its arguments or return values from `numValues()`. Accepts integer arguments and returns single integer.
* **diff()** Finds difference of arguments or return values from numValues(). Accepts integer arguments and returns single integer.

### Relevant information
* First, initialize the libary, by creating an object of `javascript numMiner()`.
* `numMiner()` accepts an object argument with three optional arguments:
* `values` this is meant to be the maximum value used by `numValues()`. Defaults to 10.
* `step` used by `numValues()` to produce an array of integers in steps. Defaults to 1.
* `type` accepts a string value of either: `prime`, `odd`, `even`.


```javascript
getNums = new numMiner({
  values: '', //optional
  step: '', //optional
  type: 'prime' //optional
});
```

### Usage
```javascript
getNums.sum(2,3); //returns 5
getNums.numValues().sum(); //return 55 (1+2+3+4+5+6+7+8+9+10)
getNums.numValues().prOdEv('prime'); //2,3,5,7
```
### Note
Method parameters overwrite class config values
###### Example:
```javascript
getNums = new numMiner({
  type: 'prime' //optional
});
console.log(getNums.numValues().prOdEv('odd')) //returns 1,3,5,7,9
```
#THANK YOU
