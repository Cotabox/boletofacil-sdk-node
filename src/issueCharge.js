export default function issueCharge(data) {
  return this.request(`${this.apiURL}/issue-charge`, data, 'post');
}
