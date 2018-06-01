export default function getPayeeStatus(data) {
  return this.request(`${this.apiURL}/get-payee-status`, data, 'post');
}
