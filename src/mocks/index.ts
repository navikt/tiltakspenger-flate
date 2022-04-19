import soknadByIdent from './soknadByIdent';
import person from './person';

const mockData: Record<string, object | object[]> = {
  '/api/soknad': soknadByIdent,
  '/api/person': person,
};
export default mockData;
