import soknadByIdent from './soknadByIdent';
import payments from './payments';
import person from './person';

const mockData: Record<string, object | object[]> = {
  '/api/soknad': soknadByIdent,
  '/api/payments': payments,
  '/api/person': person,
};
export default mockData;
