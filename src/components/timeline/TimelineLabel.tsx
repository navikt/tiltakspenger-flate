import React from 'react';

const TimelineLabel = ({ label }: { label: string }) => {
  return (
    <span className="font-bold w-36 mr-2 border-r self-stretch py-2">
      {label}
    </span>
  );
};

export default TimelineLabel;
