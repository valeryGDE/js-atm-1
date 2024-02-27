import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';


describe('getEvenNumbersFromArray', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return array of even numbers from original array', function() {
    expect(validator.getEvenNumbersFromArray([1, 2, 3, 4]))
      .to.deep.equal([2, 4]);
  });

  it('should throw an error when not array is provided', function() {
    expect(() => {
      validator.getEvenNumbersFromArray('Hi');
    }).to.throw(`[Hi] is not an array of "Numbers"`);
  });

  it('should throw an error when not array of numbers is provided', function() {
    expect(() => {
      validator.getEvenNumbersFromArray([1, 2, '3', '4']);
    }).to.throw(`[1,2,3,4] is not an array of "Numbers"`);
  });
});
