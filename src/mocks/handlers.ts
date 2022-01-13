import {
  defaultContext,
  ResponseResolver,
  ResponseTransformer,
  rest,
} from 'msw';
import mockData from './index';
import { MockedRequest } from 'msw/lib/types/handlers/RequestHandler';

type CtxWithJson = typeof defaultContext & {
  json: (data: Record<any, any>) => ResponseTransformer;
};

const resolveWith =
  <T>(data: T): ResponseResolver<MockedRequest, CtxWithJson> =>
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  };

export const getMockHandlers = () => {
  return Object.entries(mockData).map(([path, data]) => {
    return rest.get(path, resolveWith(data));
  });
};
