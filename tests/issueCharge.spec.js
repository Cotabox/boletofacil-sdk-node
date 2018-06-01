/* global describe beforeEach it afterEach */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import BoletoFacil from '../src/index';

sinonStubPromise(sinon);

chai.use(sinonChai);

describe('issueCharge', () => {
  let boletoFacil;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    boletoFacil = new BoletoFacil();

    fetchedStub = sinon.stub(boletoFacil, 'issueCharge');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist issueCharge', () => expect(boletoFacil.issueCharge).to.exist);

    it('should issueCharge be a function', () => expect(boletoFacil.issueCharge).to.be.a('function'));
  });

  it('should call fetch method', () => {
    const issueCharge = boletoFacil.issueCharge();
    return expect(fetchedStub).to.be.calledOnce;
  });

  it('should call fetch with the correct data', () => {
    const payee = boletoFacil.issueCharge('test');
    expect(fetchedStub).to.have.been
      .calledWith('test');
  });

  it('should return the correct data from Promise', () => {
    promise.resolves({ token: '123' });
    const payee = boletoFacil.issueCharge('test');

    expect(payee.resolveValue).to.be.eql({ token: '123' });
  });
});
