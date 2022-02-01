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
    if ((req as any)?.params?.soknadId == '11710') {
      return res(
        ctx.status(404),
        ctx.json({
          error: 'NOT_FOUND',
          message: 'Fant ikke soknad med id 11710',
        })
      );
    }
    return res(ctx.status(200), ctx.json(data));
  };

export const getMockHandlers = () => {
  return Object.entries(mockData).map(([path, data]) => {
    return rest.get(path, resolveWith(data));
  });
};
