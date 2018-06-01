/* global describe beforeEach it afterEach */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import BoletoFacil from '../src/index';
import listChargesFunc from '../src/listCharges';

sinonStubPromise(sinon);

chai.use(sinonChai);

describe('listCharges', () => {
  let boletoFacil;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    boletoFacil = new BoletoFacil();

    fetchedStub = sinon.stub(boletoFacil, 'listCharges');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist listCharges', () => expect(boletoFacil.listCharges).to.exist);
    it('should exist listCharges function', () => expect(listChargesFunc).to.exist);

    it('should listCharges be a function', () => expect(boletoFacil.listCharges).to.be.a('function'));
    it('should original listCharges be a function', () => expect(listChargesFunc).to.be.a('function'));
  });

  it('should call original func', () => expect(listChargesFunc).to.throw());

  it('should call fetch method', () => {
    const listCharges = boletoFacil.listCharges();
    return expect(fetchedStub).to.be.calledOnce;
  });

  it('should call fetch with the correct data', () => {
    const payee = boletoFacil.listCharges('test');
    expect(fetchedStub).to.have.been
      .calledWith('test');
  });

  it('should return the correct data from Promise', () => {
    promise.resolves({ token: '123' });
    const payee = boletoFacil.listCharges('test');

    expect(payee.resolveValue).to.be.eql({ token: '123' });
  });
});
