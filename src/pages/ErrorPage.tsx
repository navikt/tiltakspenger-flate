import React from 'react';
import { Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';

const isValidErrorCode = (code: any): code is ResultStatusType => {
  return (
    code === 'success' ||
    code === 'error' ||
    code === '403' ||
    code === '404' ||
    code === '500'
  );
};

const ErrorPage = ({
  errorCode,
  message,
}: {
  errorCode: ResultStatusType;
  message: string | undefined;
}) => {
  const status = isValidErrorCode(errorCode) ? errorCode : 'error';
  return (
    <Result
      status={status}
      title={'Something went wrong'}
      subTitle={message || ''}
    />
  );
};

export default ErrorPage;
