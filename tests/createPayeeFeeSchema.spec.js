/* global describe beforeEach it afterEach */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import BoletoFacil from '../src/index';
import createPayeeFeeSchemaFunc from '../src/createPayeeFeeSchema';

sinonStubPromise(sinon);

chai.use(sinonChai);

describe('createPayeeFeeSchema', () => {
  let boletoFacil;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    boletoFacil = new BoletoFacil();

    fetchedStub = sinon.stub(boletoFacil, 'createPayeeFeeSchema');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist createPayeeFeeSchema', () => expect(boletoFacil.createPayeeFeeSchema).to.exist);

    it('should createPayeeFeeSchema be a function', () => expect(boletoFacil.createPayeeFeeSchema).to.be.a('function'));
  });

  describe('smoke tests', () => {
    it('should exist createPayeeFeeSchema', () => expect(boletoFacil.createPayeeFeeSchema).to.exist);
    it('should exist createPayeeFeeSchema function', () => expect(createPayeeFeeSchemaFunc).to.exist);

    it('should createPayeeFeeSchema be a function', () => expect(boletoFacil.createPayeeFeeSchema).to.be.a('function'));
    it('should original createPayeeFeeSchema be a function', () => expect(createPayeeFeeSchemaFunc).to.be.a('function'));
  });

  it('should call original func', () => expect(createPayeeFeeSchemaFunc).to.throw());

  it('should call fetch method', () => {
    const createPayeeFeeSchema = boletoFacil.createPayeeFeeSchema();
    return expect(fetchedStub).to.be.calledOnce;
  });

  it('should call fetch with the correct URL', () => {
    const payee = boletoFacil.createPayeeFeeSchema('test');
    expect(fetchedStub).to.have.been
      .calledWith('test');
  });

  it('should return the correct data from Promise', () => {
    promise.resolves({ token: '123' });
    const payee = boletoFacil.createPayeeFeeSchema('test');

    expect(payee.resolveValue).to.be.eql({ token: '123' });
  });
});
