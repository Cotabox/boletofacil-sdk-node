/* global fetch */

import createPayee from './createPayee';
import createPayeeFeeSchema from './createPayeeFeeSchema';
import getPayeeStatus from './getPayeeStatus';
import issueCharge from './issueCharge';

import API from './config';

const http = require('axios');
const FormData = require('form-data');

async function request(url, body, method = 'post') {
  const opts = {
    method,
    url,
  };

  if (body) {
    const formdata = new FormData();

    Object.keys(body).map((opt) => {
      formdata.append(opt, String(body[opt]));

      return true;
    });

    opts.data = formdata;
    opts.headers = formdata.getHeaders();
  }

  try {
    const res = await http(opts);

    return res.data;
  } catch (e) {
    if (e.response.data) {
      return e.response.data;
    }

    return e;
  }
}

export default class BoletoFacil {
  constructor(options = {}) {
    this.apiURL = options.production ? API.production : API.sandbox;

    this.createPayee = createPayee;
    this.createPayeeFeeSchema = createPayeeFeeSchema;
    this.getPayeeStatus = getPayeeStatus;
    this.issueCharge = issueCharge;
    this.request = request;
  }
}
