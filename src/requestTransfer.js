export default function requestTransfer(data) {
  return this.request(`${this.apiURL}/request-transfer`, data, 'post');
}
