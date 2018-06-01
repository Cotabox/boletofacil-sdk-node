/* global describe it beforeEach afterEach */

import chai, { expect } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import BoletoFacil from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('BoletoFacil', () => {
  it('should create an instance of BoletoFacil', () => {
    const boletoFacil = new BoletoFacil();
    expect(boletoFacil).to.be.an.instanceOf(BoletoFacil);
  });

  it('should call production API_URL', () => {
    const boletoFacil = new BoletoFacil({
      production: true,
    });

    expect(boletoFacil.apiURL).to.be.equal('https://boletobancario.com/boletofacil/integration/api/v1');
  });

  it('should use the default apiURL if not provided', () => {
    const boletoFacil = new BoletoFacil();
    expect(boletoFacil.apiURL).to.be.equal('https://sandbox.boletobancario.com/boletofacil/integration/api/v1');
  });


  describe('Request Method', () => {
    const boletoFacil = new BoletoFacil();
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(boletoFacil, 'request');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should have request method', () => expect(boletoFacil.request).to.exist);

    it('should call fetch when request', () => {
      boletoFacil.request('url');

      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the right url passed', () => {
      boletoFacil.request('url');

      return expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with the right body passed', () => {
      const body = {
        body: {
          token: 'foo',
        },
      };

      boletoFacil.request('url', body);

      return expect(fetchedStub).to.have.been.calledWith('url', body);
    });
  });
});
