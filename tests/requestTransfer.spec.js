/* global describe beforeEach it afterEach */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import BoletoFacil from '../src/index';
import requestTransferFunc from '../src/requestTransfer';

sinonStubPromise(sinon);

chai.use(sinonChai);

describe('requestTransfer', () => {
  let boletoFacil;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    boletoFacil = new BoletoFacil();

    fetchedStub = sinon.stub(boletoFacil, 'requestTransfer');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist requestTransfer', () => expect(boletoFacil.requestTransfer).to.exist);
    it('should exist requestTransfer function', () => expect(requestTransferFunc).to.exist);

    it('should requestTransfer be a function', () => expect(boletoFacil.requestTransfer).to.be.a('function'));
    it('should original requestTransfer be a function', () => expect(requestTransferFunc).to.be.a('function'));
  });

  it('should call original func', () => expect(requestTransferFunc).to.throw());

  it('should call fetch method', () => {
    const requestTransfer = boletoFacil.requestTransfer();
    return expect(fetchedStub).to.be.calledOnce;
  });

  it('should call fetch with the correct data', () => {
    const response = boletoFacil.requestTransfer('test');
    expect(fetchedStub).to.have.been
      .calledWith('test');
  });

  it('should return the correct data from Promise', () => {
    promise.resolves({ token: '123' });
    const response = boletoFacil.requestTransfer('test');

    expect(response.resolveValue).to.be.eql({ token: '123' });
  });
});
