/* global describe beforeEach it afterEach */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import BoletoFacil from '../src/index';
import getPayeeStatusFunc from '../src/getPayeeStatus';

sinonStubPromise(sinon);

chai.use(sinonChai);

describe('getPayeeStatus', () => {
  let boletoFacil;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    boletoFacil = new BoletoFacil();

    fetchedStub = sinon.stub(boletoFacil, 'getPayeeStatus');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist getPayeeStatus', () => expect(boletoFacil.getPayeeStatus).to.exist);
    it('should exist getPayeeStatus function', () => expect(getPayeeStatusFunc).to.exist);

    it('should getPayeeStatus be a function', () => expect(boletoFacil.getPayeeStatus).to.be.a('function'));
    it('should original getPayeeStatus be a function', () => expect(getPayeeStatusFunc).to.be.a('function'));
  });

  it('should call original func', () => expect(getPayeeStatusFunc).to.throw());

  it('should call fetch method', () => {
    const getPayeeStatus = boletoFacil.getPayeeStatus();
    return expect(fetchedStub).to.be.calledOnce;
  });

  it('should call fetch with the correct data', () => {
    const payee = boletoFacil.getPayeeStatus('test');
    expect(fetchedStub).to.have.been
      .calledWith('test');
  });

  it('should return the correct data from Promise', () => {
    promise.resolves({ token: '123' });
    const payee = boletoFacil.getPayeeStatus('test');

    expect(payee.resolveValue).to.be.eql({ token: '123' });
  });
});
