import {
  defaultContext,
  ResponseResolver,
  ResponseTransformer,
  rest,
  MockedRequest,
} from 'msw';
import mockData from './apiRoutes';

type CtxWithJson<T> = typeof defaultContext & {
  json: (data: T) => ResponseTransformer;
};

type MockedRequestWithParams = MockedRequest & {
  params: Record<string, string>;
};

interface ErrorMessage {
  error: string;
  message: string;
}

const wait = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });
};

const resolveWith =
  <T>(
    data: T
  ): ResponseResolver<MockedRequest, CtxWithJson<T | ErrorMessage>> =>
  async (req, res, ctx) => {
    await wait(500);
    if ((req as MockedRequestWithParams)?.params?.soknadId == '11710') {
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
