import soknadByIdent from './soknadByIdent';
import person from './person';
import complexTimeline from './complexTimeline';

const mockData: Record<string, object | object[]> = {
  '/api/soknad': complexTimeline, // soknadByIdent,
  '/api/person': person,
};
export default mockData;
