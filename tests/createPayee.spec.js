/* global describe beforeEach it afterEach */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import BoletoFacil from '../src/index';
import createPayeeFunc from '../src/createPayee';

sinonStubPromise(sinon);

chai.use(sinonChai);

describe('createPayee', () => {
  let boletoFacil;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    boletoFacil = new BoletoFacil();

    fetchedStub = sinon.stub(boletoFacil, 'createPayee');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist createPayee', () => expect(boletoFacil.createPayee).to.exist);
    it('should exist createPayee function', () => expect(createPayeeFunc).to.exist);

    it('should createPayee be a function', () => expect(boletoFacil.createPayee).to.be.a('function'));
    it('should original createPayee be a function', () => expect(createPayeeFunc).to.be.a('function'));
  });

  it('should call original func', () => expect(createPayeeFunc).to.throw());

  it('should call fetch method', () => {
    const createPayee = boletoFacil.createPayee();
    return expect(fetchedStub).to.be.calledOnce;
  });

  it('should call fetch with the correct data', () => {
    const payee = boletoFacil.createPayee('test');
    expect(fetchedStub).to.have.been
      .calledWith('test');
  });

  it('should return the correct data from Promise', () => {
    promise.resolves({ token: '123' });
    const payee = boletoFacil.createPayee('test');

    expect(payee.resolveValue).to.be.eql({ token: '123' });
  });
});
