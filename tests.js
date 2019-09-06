/* global describe, it */
const assert = require('assert');
const student = require('./index');

describe('isYoung function', () => {
  it('a test for isYoung', () => {
    assert.equal(true, student.isYoung(1));
  });
});

describe('isManInSweden function', () => {
  it('a test for isManInSweden', () => {
    assert.equal(true, student.isManInSweden('7210090697'));
  });
});

describe('firstTwoDigitInteger function', () => {
  it('a test for firstTwoDigitInteger', () => {
    assert.equal(10, student.firstTwoDigitInteger([1, 10, 5]));
  });
});
