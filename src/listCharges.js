export default function listCharges(data) {
  return this.request(`${this.apiURL}/list-charges`, data, 'post');
}
