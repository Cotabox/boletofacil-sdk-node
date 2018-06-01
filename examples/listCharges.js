/* eslint-disable */

const BoletoFacil = require('../dist/boleto-facil.min.js');

const boletoFacil = new BoletoFacil();

const charges = boletoFacil.listCharges({
  token: '0192B1544430E3943D4F9E4AAAF94952DBF5DEC20590008C279A04EAD3059EEA',
  beginPaymentDate: '30/05/2018',
});

charges.then(res => console.log(res));
