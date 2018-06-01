## SDK Node para integração com o Boleto Fácil

[![Build Status](https://travis-ci.org/Cotabox/boletofacil-sdk-node.svg?branch=master)](https://travis-ci.org/Cotabox/boletofacil-sdk-node) [![Coverage Status](https://coveralls.io/repos/github/Cotabox/boletofacil-sdk-node/badge.svg?branch=master)](https://coveralls.io/github/Cotabox/boletofacil-sdk-node?branch=master)

Este SDK (Software Development Kit) para o Boleto Fácil tem como objetivo abstrair, para desenvolvedores de aplicações Node, os detalhes de comunicação com a [API do Boleto Fácil](https://www.boletobancario.com/boletofacil/integration/integration.html), tanto com o servidor de [produção](https://www.boletobancario.com/boletofacil/) como com o servidor de testes ([sandbox](https://sandbox.boletobancario.com/boletofacil/)), de modo que o desenvolvedor possa se concentrar na lógica de negócio de sua aplicação.

## Requisitos

* Node (qualquer versão)

## Integração

```sh
npm install boleto-facil --save
```

## Limitações

O único item da API do Boleto Fácil que essa SDK não contempla é a [notificação de pagamentos](https://www.boletobancario.com/boletofacil/integration/integration.html#notificacao) para aplicações Web, através da URL de notificação. Nesse caso, tanto a lógica de captura das requisições POST enviadas pelo Boleto Fácil com os dados dos pagamentos como a lógica da baixa das cobranças pagas ficam a cargo do sistema integrado com o Boleto Fácil.

## Guia de uso

Por padrão, ao utilizar a API será utilizado o ambiente SANDBOX, para utilizar em produção, siga o exemplo abaixo:

```js
import BoletoFacil from 'boleto-facil';

const boletoFacil = new BoletoFacil({
  production: true
});

```


### Gerando uma cobrança

`Charge` é um método que representa uma cobrança do Boleto Fácil e que contém os atributos relacionados a ela, que 
são exatamente os atributos disponibilizados pela API do Boleto Fácil e podem ser conferidos [aqui](https://www.boletobancario.com/boletofacil/integration/integration.html#cobrancas). 

```js
const chargeResponse = boletoFacil.issueCharge({
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

chargeResponse.then(res => console.log(res));

```

A constante `chargeResponse` é uma promise que quando resolvida retorna a resposta da API da Boleto Fácil.


### Consulta de saldo

Por padrão, as requisições feitas pelo SDK desserializam o retorno em **JSON** para popular os objetos com as informações das requisições, mas o SDK também provê a possibilidade de alterar a formatação do retorno da API para **XML**, conforme pode ser visto no exemplo abaixo:

```js
const balance = boletoFacil.fetchBalance({
  token: '0192B1544430E3943D4F9E4AAAF94952DBF5DEC20590008C279A04EAD3059EEA',
  responseType: 'XML'
});

balance.then(res => console.log(res));

```


### Solicitação de transferência

```js
const response = boletoFacil.requestTransfer({
  token: '0192B1544430E3943D4F9E4AAAF94952DBF5DEC20590008C279A04EAD3059EEA',
});

response.then(res => console.log(res));
```

### Consulta de pagamentos e cobranças

```js
const charges = boletoFacil.listCharges({
  token: '0192B1544430E3943D4F9E4AAAF94952DBF5DEC20590008C279A04EAD3059EEA',
  beginPaymentDate: '30/05/2018',
});

charges.then(res => console.log(res));
```


### Criação de favorecido (API Avançada)

A API avançada também está disponível no SDK. Segue abaixo um exemplo de criação de favorecido, com os principais atributos (e objetos) relacionados.

```js
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

```

A tabela com os códigos de município do IBGE pode ser consultada [aqui](http://www.ibge.gov.br/home/geociencias/areaterritorial/area.shtm).


## Suporte

Em caso de dúvidas, problemas ou sugestões, não hesite em contatar nossa [equipe de suporte](mailto:suporte@boletobancario.com).

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Cotabox/boletofacil-sdk-node/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

|  ![João Cavalcante](https://avatars1.githubusercontent.com/u/13931503?v=3&s=150)    | ![Leonardo Turbiani](https://avatars3.githubusercontent.com/u/1368287?v=3&s=150)
|-------------|--------|
|[João Cavalcante](https://github.com/kavalcante/)| [Leonardo Turbiani](https://github.com/turbiani/) |

See also the list of [contributors](https://github.com/Cotabox/boletofacil-sdk-node/contributors) who participated in this project.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details
