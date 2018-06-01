/* eslint-disable */

const BoletoFacil = require('../dist/boleto-facil.min.js');

const boletoFacil = new BoletoFacil();



const issue = boletoFacil.issueCharge({
  token: '0192B1544430E3943D4F9E4AAAF94952DBF5DEC20590008C279A04EAD3059EEA',
  description: 'Pedido 48192 / TV 40 Polegadas / Cosméticos',
  reference: '',
  amount: '10.00',
  dueDate: '',
  installments: '',
  maxOverdueDays: '',
  fine: '',
  interest: '',
  discountAmount: '',
  discountDays: '',
  payerName: 'Cotabox',
  payerCpfCnpj: '21.842.162/0001-47',
  payerEmail: '',
  payerSecondaryEmail: '',
  payerPhone: '',
  payerBirthDate: '',
  billingAddressStreet: '',
  billingAddressNumber: '',
  billingAddressComplement: '',
  billingAddressNeighborhood: '',
  billingAddressCity: '',
  billingAddressState: '',
  billingAddressPostcode: '',
  notifyPayer: '',
  notificationUrl: '',
  responseType: '',
  feeSchemaToken: '',
  splitRecipient: '',
  paymentTypes: '',
  creditCardHash: '',
  creditCardNumber: '',
  creditCardHolderName: '',
  creditCardSecurityCode: '',
  creditCardExpirationMonth: '',
  creditCardExpirationYear: '',
  paymentAdvance: '',
});

issue.then(res => console.log(res));
