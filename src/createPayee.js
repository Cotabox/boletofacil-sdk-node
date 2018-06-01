export default function createPayee(data) {
  return this.request(`${this.apiURL}/create-payee`, data, 'post');
}
