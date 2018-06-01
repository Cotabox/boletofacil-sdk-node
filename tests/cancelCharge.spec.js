/* global describe beforeEach it afterEach */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import BoletoFacil from '../src/index';
import cancelChargeFunc from '../src/cancelCharge';

sinonStubPromise(sinon);

chai.use(sinonChai);

describe('cancelCharge', () => {
  let boletoFacil;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    boletoFacil = new BoletoFacil();

    fetchedStub = sinon.stub(boletoFacil, 'cancelCharge');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist cancelCharge', () => expect(boletoFacil.cancelCharge).to.exist);
    it('should exist cancelCharge function', () => expect(cancelChargeFunc).to.exist);

    it('should cancelCharge be a function', () => expect(boletoFacil.cancelCharge).to.be.a('function'));
    it('should original cancelCharge be a function', () => expect(cancelChargeFunc).to.be.a('function'));
  });

  it('should call original func', () => expect(cancelChargeFunc).to.throw());

  it('should call fetch method', () => {
    const cancelCharge = boletoFacil.cancelCharge();
    return expect(fetchedStub).to.be.calledOnce;
  });

  it('should call fetch with the correct data', () => {
    const charge = boletoFacil.cancelCharge('test');
    expect(fetchedStub).to.have.been
      .calledWith('test');
  });

  it('should return the correct data from Promise', () => {
    promise.resolves({ token: '123' });
    const charge = boletoFacil.cancelCharge('test');

    expect(charge.resolveValue).to.be.eql({ token: '123' });
  });
});
