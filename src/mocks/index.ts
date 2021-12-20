import soknad from './soknad';
import soknadList from './soknadList';
import payments from './payments';
import person from './person';

const mockData: Record<string, object | object[]> = {
  '/api/mocksoknad/1': soknad,
  '/api/mocksoknad': soknadList,
  '/api/soknad/1': soknad,
  '/api/soknad': soknadList,
  '/api/payments': payments,
  '/api/person': person,
};
export default mockData;
