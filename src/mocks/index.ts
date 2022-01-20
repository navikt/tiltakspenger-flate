import soknad from './soknad';
import soknadList from './soknadList';
import payments from './payments';
import person from './person';

const mockData: Record<string, object | object[]> = {
  '/api/soknad/:soknadId': soknad,
  '/api/soknad': soknadList,
  '/api/payments': payments,
  '/api/person': person,
};
export default mockData;
