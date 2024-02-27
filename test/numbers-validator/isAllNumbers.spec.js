import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';


describe('isAllNumbers', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return true for array of numbers', function() {
    expect(validator.isAllNumbers([1, 2, 3, 4])).to.be.equal(true);
  });

  it('should return false for array containing not numbers', function() {
    expect(validator.isAllNumbers([1, 2, 3, '4'])).to.be.equal(false);
  });

  it('should throw an error for not array', function() {
    expect(() => {
      validator.isAllNumbers('hello');
    }).to.throw(`[hello] is not an array`);
  });
});
