import React from 'react';

const TestPage = () => {
  const testServer = () => {
    fetch('/api/test')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('ERROR');
        console.log(err);
      });
  };
  const testServerAuth = () => {
    fetch('/api/application')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('ERROR');
        console.log(err);
      });
  };

  return (
    <div>
      <button
        onClick={testServer}
        className="rounded p-4 bg-gray-100 border border-gray-200 mt-4"
      >
        Ping backend
      </button>
      <button
        onClick={testServerAuth}
        className="rounded p-4 bg-gray-100 border border-gray-200 mt-4"
      >
        Ping backend auth
      </button>
    </div>
  );
};

export default TestPage;
