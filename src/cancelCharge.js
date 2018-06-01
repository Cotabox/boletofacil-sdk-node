export default function cancelCharge(data) {
  return this.request(`${this.apiURL}/cancel-charge`, data, 'post');
}
