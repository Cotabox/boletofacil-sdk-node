export default function createPayeeFeeSchema(data) {
  return this.request(`${this.apiURL}/create-payee-fee-schema`, data, 'post');
}
