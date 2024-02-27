import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';


describe('isNumberEven', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return true if number is even', function() {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should return false if number is odd', function() {
    expect(validator.isNumberEven(77)).to.be.equal(false);
  });

  it('should throw an error when not number is provided', function() {
    expect(() => {
      validator.isNumberEven('hello');
    }).to.throw(`[hello] is not of type "Number" it is of type "string"`);
  });
});
