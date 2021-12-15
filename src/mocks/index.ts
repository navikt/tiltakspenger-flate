import soknad from './soknad';
import soknadList from './soknadList';
import payments from './payments';

const mockData: Record<string, object | object[]> = {
  '/api/mocksoknad': soknadList,
  '/api/mocksoknad/1': soknad,
  '/api/payments': payments,
};
export default mockData;
