import React, { CSSProperties } from 'react';
import TimelineLabel from './TimelineLabel';

const Timeline = ({
  label,
  style,
  onClick,
  selected,
}: {
  label: string;
  style: CSSProperties;
  onClick: () => void;
  selected: boolean;
}) => {
  return (
    <div className="flex items-center">
      <TimelineLabel label={label} />
      <button
        tabIndex={0}
        onClick={onClick}
        className={`border border-red-400 rounded-full bg-red-200 p-4 ${
          selected ? 'border-2' : ''
        }`}
        style={style}
      />
    </div>
  );
};

export default Timeline;
