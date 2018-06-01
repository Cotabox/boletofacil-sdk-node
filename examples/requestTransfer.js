/* eslint-disable */

const BoletoFacil = require('../dist/boleto-facil.min.js');

const boletoFacil = new BoletoFacil();

const response = boletoFacil.requestTransfer({
  token: '0192B1544430E3943D4F9E4AAAF94952DBF5DEC20590008C279A04EAD3059EEA',
});

response.then(res => console.log(res));
