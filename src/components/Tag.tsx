import React, { FC } from 'react';

const Tag: FC = ({ children }) => {
  return (
    <div className="border border-purple-200 bg-purple-100 rounded text-xs font-bold px-2">
      {children}
    </div>
  );
};

export default Tag;
