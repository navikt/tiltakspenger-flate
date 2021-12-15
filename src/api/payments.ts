import { HTTP } from './common';

export const getPayments = () => {
  return HTTP.GET('/api/payments');
};
