import axios, { Method } from 'axios';
import { BASE_URL } from '_core/configs/config';

const ApiCall = async (method: Method, path: string, data?: any, params?: any, formatResult?: Function) => {
  return await axios({
    url: BASE_URL + path,
    method,
    params,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data,
  }).then((res) => (formatResult ? formatResult(res) : res));
};

export default ApiCall;
