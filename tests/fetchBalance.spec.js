/* global describe beforeEach it afterEach */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import BoletoFacil from '../src/index';
import fetchBalanceFunc from '../src/fetchBalance';

sinonStubPromise(sinon);

chai.use(sinonChai);

describe('fetchBalance', () => {
  let boletoFacil;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    boletoFacil = new BoletoFacil();

    fetchedStub = sinon.stub(boletoFacil, 'fetchBalance');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist fetchBalance', () => expect(boletoFacil.fetchBalance).to.exist);
    it('should exist fetchBalance function', () => expect(fetchBalanceFunc).to.exist);

    it('should fetchBalance be a function', () => expect(boletoFacil.fetchBalance).to.be.a('function'));
    it('should original fetchBalance be a function', () => expect(fetchBalanceFunc).to.be.a('function'));
  });

  it('should call original func', () => expect(fetchBalanceFunc).to.throw());

  it('should call fetch method', () => {
    const fetchBalance = boletoFacil.fetchBalance();
    return expect(fetchedStub).to.be.calledOnce;
  });

  it('should call fetch with the correct data', () => {
    const balance = boletoFacil.fetchBalance('test');
    expect(fetchedStub).to.have.been
      .calledWith('test');
  });

  it('should return the correct data from Promise', () => {
    promise.resolves({ token: '123' });
    const balance = boletoFacil.fetchBalance('test');

    expect(balance.resolveValue).to.be.eql({ token: '123' });
  });
});
