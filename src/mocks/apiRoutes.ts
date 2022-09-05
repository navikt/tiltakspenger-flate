import soknadByIdent from './soknadByIdent';
import { vedtakPayload } from './vedtakPayload';
// import complexTimeline from './complexTimeline';

const mockData: Record<string, object | object[]> = {
  '/api/saker/person': vedtakPayload,
  '/api/person/test': vedtakPayload,
};
export default mockData;
