/* eslint-disable */

const BoletoFacil = require('../dist/boleto-facil.min.js');

const boletoFacil = new BoletoFacil();

const feeSchema = boletoFacil.createPayeeFeeSchema({
  token: '0192B1544430E3943D4F9E4AAAF94952DBF5DEC20590008C279A04EAD3059EEA',
  splitFixed: 0,
  splitVariable: 3,
  splitTriggerAmount: 0,
});

feeSchema.then(res => console.log(res));
