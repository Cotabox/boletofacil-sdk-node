/* eslint-disable */

const BoletoFacil = require('../dist/boleto-facil.min.js');

const boletoFacil = new BoletoFacil();

const payee = boletoFacil.createPayee({
  token: '0192B1544430E3943D4F9E4AAAF94952DBF5DEC20590008C279A04EAD3059EEA',
  notificationUrl: '',
  name: 'Isabella e Carolina Locações de Automóveis ME',
  cpfCnpj: '21.842.162/0001-47',
  email: 'compras@isabellaecarolinalocacoesdeautomoveisme.com.br',
  password: '12345',
  birthDate: '',
  phone: '(11) 3613-0831',
  linesOfBusiness: 'Fornecedor',
  tradingName: 'Isabella e Carolina Locações de Automóveis ME',
  reprName: 'Severino',
  reprCpfCnpj: '377.910.350-81',
  reprBirthDate: '25/09/2013',
  accountHolderName: 'Isabella e Carolina Locações de Automóveis ME',
  accountHolderCpfCnpj: '21.842.162/0001-47',
  bankNumber: '077',
  agencyNumber: '0001-9',
  accountNumber: '1211054-0',
  bankAccountType: 'CHECKING',
  accountComplementNumber: '',
  category: 'SERVICES',
  companyType: 'LTDA',
  street: 'Rua Manuel Soeiro Ramirez',
  number: '115',
  complement: '',
  neighborhood: 'Jardim Mimar',
  city: 'São Paulo',
  state: 'SP',
  postCode: '08534245',
  businessAreaId: '2024',
});

payee.then(res => console.log(res));
