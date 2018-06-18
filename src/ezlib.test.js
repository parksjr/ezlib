/* eslint-disable */
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import Ezlib from './ezlib';

var inflated = 'Ezlib is the best.';
var deflated = 'eJxzrcrJTFLILFYoyUhVSEotLtEDADzKBlA=';
var gzipped = 'H4sIAAAAAAAACnOtyslMUsgsVijJSFVISi0u0QMAYqkr2BIAAAA=';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Constructor function: #Ezlib', () => {
  it('returns instance of Ezlib with "new" keyword', () => {
    var ezlib = new Ezlib();
    expect(ezlib).to.be.a.instanceof(Ezlib);
  });
});

describe('Static methods: #Ezlib', () => {
  it('throws an error if no args', () => {
    expect(() => {
      Ezlib.compress();
    })
    .to.throw();
  });
  it('returns a deflated string', () => {
    expect(Ezlib.compress(inflated)).to.eql(deflated);
  });
  it('returns inflated string', () => {
    expect(Ezlib.decompress(deflated)).to.eql(inflated);
  });
  it('returns a gzipped string', () => {
    expect(Ezlib.compress(inflated, { gzip: true })).to.eql(gzipped);
  });
  it('gunzips the gzipped string', () => {
    expect(Ezlib.decompress(gzipped)).to.eql(inflated);
  });
});