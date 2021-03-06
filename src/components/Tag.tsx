import React, { FC, ReactNode } from 'react';

const Tag: FC<{ className?: string; children: ReactNode }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`border rounded text-xs font-bold ${className}`}>
      {children}
    </div>
  );
};

export default Tag;
