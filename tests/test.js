'use strict';
/* eslint-disable */
var jasmine = require('jasmine').expect;
var SimpleNumbers = require('..//lib/simplenumbers.js');
var sN = new SimpleNumbers();

describe('Determine method parameters', ()=> {

    describe('case for empty parameter in construcor method', ()=>{
        it('typeof object for SimpleNumbers', ()=>{
            expect(typeof sN).toEqual(typeof {});
            expect(sN instanceof SimpleNumbers).toBeTruthy();
        })
    });
    
})


