import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';


describe('isInteger', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return true if number is an integer', function() {
    expect(validator.isInteger(4)).to.be.equal(true);
  });

  it('should return false if number is not an integer', function() {
    expect(validator.isNumberEven(7.9)).to.be.equal(false);
  });

  it('should throw an error when not number is provided', function() {
    expect(() => {
      validator.isInteger('hello');
    }).to.throw(`[hello] is not a number`);
  });
});
