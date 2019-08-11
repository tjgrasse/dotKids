const childRegistration = require("./js/childRegistration.js");
const childFil = require('./js/childFilter.js');
const assert = require('assert');

// Complete the child Registration tests here
it('Check non equal passwords fail', () => {
    assert.equal(childRegistration.passwordsEqual("abcdef", "fedcba"), false)
})

it('Check equal passwords pass', () => {
    assert.equal(childRegistration.passwordsEqual("abcdef", "abcdef"), true)
})

// Complete the child filter tests here
it('Check c1 is true c2 and c3 are false pass as true', () => {
    assert.equal(childFil.checkContentValues(true, false, false), true)
})

it('Check c2 is true c1 and c3 are false pass as true', () => {
    assert.equal(childFil.checkContentValues(false, true, false), true)
})

it('Check c3 is true c1 and c2 are false pass as true', () => {
    assert.equal(childFil.checkContentValues(false, false, true), true)
})

it('Check c1 and c2 are true c3 is false pass as true', () => {
    assert.equal(childFil.checkContentValues(true, true, false), true)
})

it('Check c1 and c3 are true c2 is false pass as true', () => {
    assert.equal(childFil.checkContentValues(true, false, true), true)
})

it('Check c2 and c3 are true c1 is false pass as true', () => {
    assert.equal(childFil.checkContentValues(false, true, true), true)
})

it('Check all are true pass as true', () => {
    assert.equal(childFil.checkContentValues(true, true, true), true)
})

it('Check all are false fail as false', () => {
    assert.equal(childFil.checkContentValues(false, false, false), false)
})
