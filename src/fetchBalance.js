export default function fetchBalance(data) {
  return this.request(`${this.apiURL}/fetch-balance`, data, 'post');
}
