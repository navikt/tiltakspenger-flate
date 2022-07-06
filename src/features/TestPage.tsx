import React from 'react';
import { HTTP, useRequest } from '../api/common';

const Good = () => <div className="w-4 h-4 m-2 bg-green-200 rounded-full" />;
const Bad = () => <div className="w-4 h-4 m-2 bg-red-200 rounded-full" />;

const TestPage = () => {
  const {
    run: testReq,
    error: testError,
    isLoading: testLoading,
  } = useRequest(() => HTTP.GET('/api/test'));
  const {
    run: authReq,
    error: authError,
    isLoading: authLoading,
  } = useRequest(() => HTTP.GET('/api/application'));
  const {
    run: tokenxReq,
    error: tokenxError,
    isLoading: tokenxLoading,
  } = useRequest(() => HTTP.GET('/api/tokenx'));
  const {
    run: serviceTokenReq,
    error: serviceTokenError,
    isLoading: serviceTokenLoading,
  } = useRequest(() => HTTP.GET('/api/servicetoken'));

  return (
    <div>
      <div className="flex items-center">
        {testError ? <Bad /> : <Good />}
        <button
          disabled={testLoading}
          onClick={testReq}
          className="rounded p-4 bg-gray-100 border border-gray-200 mt-4"
        >
          Ping backend
        </button>
        {authError ? <Bad /> : <Good />}
        <button
          disabled={authLoading}
          onClick={authReq}
          className="rounded p-4 bg-gray-100 border border-gray-200 mt-4"
        >
          Ping backend auth
        </button>
        {tokenxError ? <Bad /> : <Good />}
        <button
          disabled={tokenxLoading}
          onClick={tokenxReq}
          className="rounded p-4 bg-gray-100 border border-gray-200 mt-4"
        >
          On behalf of flow
        </button>
        {serviceTokenError ? <Bad /> : <Good />}
        <button
          disabled={serviceTokenLoading}
          onClick={serviceTokenReq}
          className="rounded p-4 bg-gray-100 border border-gray-200 mt-4"
        >
          Get servicetoken
        </button>
      </div>
      <div className="flex border p-4 border-sky-400 rounded m-4 min-h-4">
        {JSON.stringify(tokenxError) || 'No message'}
      </div>
    </div>
  );
};

export default TestPage;
