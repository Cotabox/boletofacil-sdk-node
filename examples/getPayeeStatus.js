/* eslint-disable */

const BoletoFacil = require('../dist/boleto-facil.min.js');

const boletoFacil = new BoletoFacil();

const payee = boletoFacil.getPayeeStatus({
  token: '0192B1544430E3943D4F9E4AAAF94952DBF5DEC20590008C279A04EAD3059EEA',
  payeeCpfCnpj: '21.842.162/0001-47',
});

payee.then(res => console.log(res));
